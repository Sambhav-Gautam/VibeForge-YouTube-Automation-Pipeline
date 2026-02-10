import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";
import "dotenv/config";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const defaultBaseDir = path.join(process.cwd(), "src", "automations", "ai_models", "Youtube", "Res"); // Default legacy path
const baseDir = process.argv[2] ? path.resolve(process.argv[2]) : defaultBaseDir;

if (!fs.existsSync(baseDir)) fs.mkdirSync(baseDir, { recursive: true });

console.log(`📂 Output directory: ${baseDir}`);

// Randomized arrays
const outfits = ["casual wear", "evening gown", "traditional attire", "sportswear", "cocktail dress", "summer outfit", "winter fashion"];
const locations = ["urban street", "beach", "mountain trail", "luxury hotel", "public park", "historic site", "studio setup"];
const moods = ["candid shot", "posed shot", "cinematic angle", "editorial style", "close-up portrait", "full-body fashion shot"];
const styles = ["high-quality photographic style", "elegant and professional modeling style", "artistic and cinematic style", "natural light fashion photography", "dramatic lighting fashion shoot"];

function randomChoice(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

const topic = `female model in ${randomChoice(outfits)}, ${randomChoice(moods)}, modeling in a ${randomChoice(locations)}, ${randomChoice(styles)}`;

// Generate a catchy title using Gemini
async function main() {
  const titleResponse = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `Generate a catchy, SEO-friendly YouTube title for a long-form video about: ${topic}`,
  });

  const title = titleResponse.text.trim();

  // Hardcoded/templated description & tags for SEO
  const description = `Watch an amazing video featuring ${topic}. Stunning visuals, professional modeling shots, and high fashion style all captured beautifully. Perfect for fashion enthusiasts and photography lovers!`;
  const tags = "fashion,modeling,photography,high fashion,female model,editorial shoot,candid shots,professional modeling,scenic locations,fashion inspiration";

  // Save metadata
  fs.writeFileSync(path.join(baseDir, "title.txt"), title);
  fs.writeFileSync(path.join(baseDir, "description.txt"), description);
  fs.writeFileSync(path.join(baseDir, "tags.txt"), tags);

  console.log(`📄 Metadata saved: ${title}`);

  // Generate video
  let operation = await ai.models.generateVideos({
    model: "veo-3.0-generate-001",
    prompt: `Create a cinematic video showcasing ${topic}. Include beautiful candid and photographic shots, high-quality visuals, fashionable attire, and scenic locations. Focus on elegance, beauty, and professional modeling style.`,
    config: { aspectRatio: "16:9", negativePrompt: "low quality, blurry, cartoon, inappropriate content" },
  });

  while (!operation.done) {
    console.log("⏳ Waiting for video generation...");
    await new Promise(r => setTimeout(r, 10000));
    operation = await ai.operations.getVideosOperation({ operation });
  }

  const videoFile = operation.response.generatedVideos[0].video;
  const videoFilePath = path.join(baseDir, "output.mp4");
  await ai.files.download({ file: videoFile, downloadPath: videoFilePath });

  // Output JSON for the python pipeline to capture
  const outputData = {
    videoPath: videoFilePath,
    title: title,
    description: description,
    tags: tags.split(",")
  };
  console.log("JSON_OUTPUT_START");
  console.log(JSON.stringify(outputData));
  console.log("JSON_OUTPUT_END");
}

await main();
