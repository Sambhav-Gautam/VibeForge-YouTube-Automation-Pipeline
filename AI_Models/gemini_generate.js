import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const baseDir = path.join(process.cwd(), "AI_Models");

// Use custom prompt or default topic
const topic = process.env.CUSTOM_PROMPT || "latest breakthrough in AI models";

const metaPrompt = `Generate a catchy, SEO-optimized YouTube title, 
a 2–3 sentence description, and 10 comma-separated tags for a long-form video about: ${topic}.
Format as JSON with keys: title, description, tags.`;

const metaResponse = await ai.models.generateText({
  model: "gemini-pro",
  prompt: metaPrompt,
});

let metadata;
try {
  metadata = JSON.parse(metaResponse.outputText.trim());
} catch (err) {
  console.error("Failed to parse metadata:", err);
  process.exit(1);
}

// Save metadata
fs.writeFileSync(path.join(baseDir, "title.txt"), metadata.title);
fs.writeFileSync(path.join(baseDir, "description.txt"), metadata.description);
fs.writeFileSync(path.join(baseDir, "tags.txt"), metadata.tags);

console.log(`📄 Metadata saved: ${metadata.title}`);

// Generate video
let operation = await ai.models.generateVideos({
  model: "veo-3.0-generate-001",
  prompt: `A cinematic explainer about ${metadata.title}`,
  config: {
    aspectRatio: "16:9",
    negativePrompt: "low quality, blurry, cartoon",
  },
});

// Poll until done
while (!operation.done) {
  console.log("⏳ Waiting for video generation...");
  await new Promise((r) => setTimeout(r, 10000));
  operation = await ai.operations.getVideosOperation({ operation });
}

// Download video
const videoFile = operation.response.generatedVideos[0].video;
await ai.files.download({
  file: videoFile,
  downloadPath: path.join(baseDir, "output.mp4"),
});
console.log(`🎬 Video saved to ${path.join(baseDir, "output.mp4")}`);
