import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

puppeteer.use(StealthPlugin());


const URL = 'https://g.co/gemini/share/a28b99983128';

// Ensure the download directory exists
const downloadDir = './downloads_Paintings_2';

if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir);
}

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, (res) => {
      if (res.statusCode === 200) {
        const fileStream = fs.createWriteStream(filepath);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close(resolve);
        });
      } else {
        reject(new Error(`Failed to download ${url}. Status: ${res.statusCode}`));
      }
    }).on('error', reject);
  });
}

(async () => {
  try {
    console.log('🚀 Launching Chrome with Profile 1...');
    const browser = await puppeteer.launch({
      headless: false,
      executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      userDataDir: 'C:\\Users\\sambh\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 1',
      args: ['--remote-debugging-port=9222'],
      dumpio: true,
      timeout: 60000,
    });

    const page = await browser.newPage();

    console.log('📜 Navigating to Gemini share page...');
    await page.goto(URL, { waitUntil: 'networkidle2' });

    console.log('📜 Page loaded. Scrolling to load all images...');
    for (let i = 0; i < 10; i++) {
      await page.evaluate(() => window.scrollBy(0, window.innerHeight));
      await new Promise((res) => setTimeout(res, 3000));
    }

    console.log('🔍 Extracting image URLs...');
    const imageUrls = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('img'))
        .map(img => img.src)
        .filter(src => src && (src.endsWith('.jpg') || src.endsWith('.png') || src.includes('googleusercontent')));
    });

    console.log(`🖼️ Found ${imageUrls.length} images.`);

    let count = 1; // Starting from 36 to avoid overwriting existing files
    for (const url of imageUrls) {
      const filename = path.join(downloadDir, `${count++}.jpg`);
      try {
        console.log(`⬇️ Downloading: ${url}`);
        await downloadImage(url, filename);
        console.log(`✅ Saved to ${filename}`);
        await new Promise((res) => setTimeout(res, 2000));
      } catch (err) {
        console.error(`❌ Failed to download ${url}:`, err.message);
      }
    }

    console.log('🎉 All images downloaded.');
    await browser.close();
  } catch (err) {
    console.error('🚨 Script failed:', err);
    process.exit(1);
  }
})();
