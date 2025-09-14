import { GoogleGenAI } from "@google/genai";
import * as fs from "fs";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// 1. Generate SEO-optimized metadata
const metaPrompt = `Create a catchy YouTube video title, a 2–3 sentence SEO-friendly description, 
and 10 comma-separated tags for a long-form explainer video on advanced AI models. 
Format as JSON with keys: title, description, tags.`;

const metaResponse = await ai.models.generateText({
  model: "gemini-pro",
  prompt: metaPrompt,
});
const metadata = JSON.parse(metaResponse.outputText.trim());

fs.writeFileSync("AI_Models/long_form/title.txt", metadata.title);
fs.writeFileSync("AI_Models/long_form/description.txt", metadata.description);
fs.writeFileSync("AI_Models/long_form/tags.txt", metadata.tags);

// 2. Generate video content
let operation = await ai.models.generateVideos({
  model: "veo-3.0-generate-001",
  prompt: `A cinematic explainer video about ${metadata.title}`,
  config: {
    aspectRatio: "16:9",
    negativePrompt: "low quality, blurry, cartoon",
  },
});

while (!operation.done) {
  console.log("⏳ Waiting for video generation...");
  await new Promise((resolve) => setTimeout(resolve, 10000));
  operation = await ai.operations.getVideosOperation({ operation });
}

const videoFile = operation.response.generatedVideos[0].video;
await ai.files.download({
  file: videoFile,
  downloadPath: "AI_Models/long_form/output.mp4",
});
console.log(`🎬 Video saved with title: ${metadata.title}`);
