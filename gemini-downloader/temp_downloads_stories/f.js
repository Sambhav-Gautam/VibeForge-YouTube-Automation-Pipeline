import fs from 'fs';
import path from 'path';

const directory = './'; // Current directory
const startNumber = 106;
const targetExt = '.png';

function extractNumeric(filename) {
  return parseFloat(filename.replace(path.extname(filename), ''));
}

async function renameSortedImages() {
  try {
    const files = await fs.promises.readdir(directory);

    const imageFiles = files.filter(file =>
      /\.(jpg|jpeg|png|webp)$/i.test(file)
    );

    // Sort by the numeric portion of the filename
    imageFiles.sort((a, b) => extractNumeric(a) - extractNumeric(b));

    for (let i = 0; i < imageFiles.length; i++) {
      const oldPath = path.join(directory, imageFiles[i]);
      const newName = `${startNumber + i}${targetExt}`;
      const newPath = path.join(directory, newName);

      await fs.promises.rename(oldPath, newPath);
      console.log(`✅ Renamed: ${imageFiles[i]} → ${newName}`);
    }

    console.log('🎉 All files renamed to .png and sorted successfully.');
  } catch (err) {
    console.error('❌ Error:', err);
  }
}

renameSortedImages();
