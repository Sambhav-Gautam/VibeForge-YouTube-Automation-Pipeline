import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const baseDir = path.join(process.cwd(), "AI_Models");

// Ensure output directory exists
if (!fs.existsSync(baseDir)) fs.mkdirSync(baseDir, { recursive: true });

// Randomized arrays
const outfits = ["casual wear","evening gown","traditional attire","sportswear","cocktail dress","summer outfit","winter fashion"];
const locations = ["urban street","beach","mountain trail","luxury hotel","public park","historic site","studio setup"];
const moods = ["candid shot","posed shot","cinematic angle","editorial style","close-up portrait","full-body fashion shot"];
const styles = ["high-quality photographic style","elegant and professional modeling style","artistic and cinematic style","natural light fashion photography","dramatic lighting fashion shoot"];

function randomChoice(arr){return arr[Math.floor(Math.random()*arr.length)];}

// Generate random topic
const topic = `female model in ${randomChoice(outfits)}, ${randomChoice(moods)}, modeling in a ${randomChoice(locations)}, ${randomChoice(styles)}`;

// Metadata prompt
const metaPrompt = `Generate a catchy, SEO-optimized YouTube title, 
a 2–3 sentence description, and 10 comma-separated tags for a long-form video about: ${topic}.
Format as JSON with keys: title, description, tags. Make it highly appealing to viewers interested in fashion, modeling, and photography.`;

async function main() {
  // Use Gemini generateContent API for text
  const metaResponse = await ai.models.generateContent({
    model: "gemini-2.5-flash", // or "gemini-pro" if you prefer
    contents: metaPrompt,
  });

  let metadata;
  try {
    metadata = JSON.parse(metaResponse.text.trim());
  } catch(err) {
    console.error("Failed to parse metadata:", err, metaResponse.text);
    process.exit(1);
  }

  // Save metadata in expected files for upload_longform.py
  fs.writeFileSync(path.join(baseDir, "title.txt"), metadata.title);
  fs.writeFileSync(path.join(baseDir, "description.txt"), metadata.description);
  fs.writeFileSync(path.join(baseDir, "tags.txt"), metadata.tags);

  console.log(`📄 Metadata saved: ${metadata.title}`);

  // Generate video (same as before)
  let operation = await ai.models.generateVideos({
    model: "veo-3.0-generate-001",
    prompt: `Create a cinematic video showcasing ${topic}. Include beautiful candid and photographic shots, high-quality visuals, fashionable attire, and scenic locations. Focus on elegance, beauty, and professional modeling style.`,
    config: { aspectRatio: "16:9", negativePrompt: "low quality, blurry, cartoon, inappropriate content" },
  });

  while(!operation.done){
    console.log("⏳ Waiting for video generation...");
    await new Promise(r => setTimeout(r, 10000));
    operation = await ai.operations.getVideosOperation({ operation });
  }

  const videoFile = operation.response.generatedVideos[0].video;
  const videoFilePath = path.join(baseDir, "output.mp4");

  await ai.files.download({ file: videoFile, downloadPath: videoFilePath });
  console.log(`🎬 Video saved to ${videoFilePath}`);
}

await main();
