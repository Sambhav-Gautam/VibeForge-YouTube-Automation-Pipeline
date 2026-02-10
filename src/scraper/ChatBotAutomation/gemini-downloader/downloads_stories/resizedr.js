import fs from 'fs';
import path from 'path';

const directory = './'; // current directory

fs.readdirSync(directory).forEach(file => {
  const filePath = path.join(directory, file);

  // Match files like "1_resized.png", "img_resized.jpeg", etc.
  if (/_resized/i.test(file) && /\.(png|jpe?g|webp)$/i.test(file)) {
    try {
      fs.unlinkSync(filePath);
      console.log(`🗑️ Deleted: ${file}`);
    } catch (err) {
      console.error(`❌ Error deleting ${file}:`, err.message);
    }
  }
});

console.log('✅ Cleanup complete.');
