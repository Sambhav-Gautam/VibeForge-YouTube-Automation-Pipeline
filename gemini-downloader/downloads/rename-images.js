import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const folderPath = 'C:\\Users\\sambh\\Downloads\\AI_Girls_Database\\gemini-downloader\\downloads';

(async () => {
  try {
    const imageFiles = fs.readdirSync(folderPath)
      .filter(file => /\.(png|jpg|jpeg)$/i.test(file))
      .map(file => ({
        name: file,
        time: fs.statSync(path.join(folderPath, file)).mtimeMs
      }))
      .sort((a, b) => a.time - b.time); // sort by modified time

    let count = 1;

    for (const { name } of imageFiles) {
      const ext = path.extname(name).toLowerCase();
      const inputPath = path.join(folderPath, name);
      const outputPath = path.join(folderPath, `${count}.png`);

      if (ext !== '.png') {
        // Convert to PNG using sharp
        await sharp(inputPath)
          .png()
          .toFile(outputPath);
        fs.unlinkSync(inputPath); // delete original
        console.log(`🔁 Converted and renamed: ${name} → ${count}.png`);
      } else {
        // Just rename
        fs.renameSync(inputPath, outputPath);
        console.log(`✅ Renamed: ${name} → ${count}.png`);
      }

      count++;
    }

    console.log('🎉 All images converted to PNG and renamed!');
  } catch (err) {
    console.error('❌ Error:', err);
  }
})();
