// rename_videos.js

const fs = require('fs');
const path = require('path');

// Change this to your absolute or relative folder path
const folderPath = path.join(__dirname);

fs.readdir(folderPath, (err, files) => {
    if (err) {
        console.error('Error reading folder:', err);
        return;
    }

    // Filter only video files (mp4, mov, etc. as needed)
    let videoFiles = files.filter(file => {
        let ext = path.extname(file).toLowerCase();
        return ['.mp4', '.mov', '.avi', '.mkv'].includes(ext);
    });

    // Sort files alphabetically
    videoFiles.sort();

    videoFiles.forEach((file, index) => {
        const ext = path.extname(file);
        const newName = `${index + 1}${ext}`;

        const oldPath = path.join(folderPath, file);
        const newPath = path.join(folderPath, newName);

        fs.rename(oldPath, newPath, (err) => {
            if (err) {
                console.error(`Error renaming ${file} to ${newName}:`, err);
            } else {
                console.log(`Renamed ${file} -> ${newName}`);
            }
        });
    });
});
