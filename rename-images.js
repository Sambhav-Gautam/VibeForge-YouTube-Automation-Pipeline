import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const folderPath = 'C:\\Users\\sambh\\Downloads\\AI_Girls_Database\\gemini-downloader\\temp_images';

(async () => {
  try {
    const imageFiles = fs.readdirSync(folderPath)
      .filter(file => /\.(png|jpg|jpeg)$/i.test(file))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
      .map(file => ({ name: file }));

    let count = 36;

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

    console.log('🎉 All images sorted by name, converted to PNG, and renamed!');
  } catch (err) {
    console.error('❌ Error:', err);
  }
})();
