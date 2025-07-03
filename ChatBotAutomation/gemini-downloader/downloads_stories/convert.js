import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const folderPath = process.cwd(); // current working directory

(async () => {
  try {
    const imageFiles = fs.readdirSync(folderPath)
      .filter(file => /\.(jpg|jpeg|webp|bmp|tiff|gif)$/i.test(file));

    if (imageFiles.length === 0) {
      console.log("No non-PNG images found to convert.");
      return;
    }

    for (const file of imageFiles) {
      const ext = path.extname(file);
      const baseName = path.basename(file, ext);
      const inputPath = path.join(folderPath, file);
      const outputPath = path.join(folderPath, `${baseName}.png`);

      await sharp(inputPath).png().toFile(outputPath);
      fs.unlinkSync(inputPath); // delete the original
      console.log(`✅ Converted: ${file} → ${baseName}.png`);
    }

    console.log("🎉 All image files converted to PNG!");
  } catch (err) {
    console.error("❌ Error:", err);
  }
})();
