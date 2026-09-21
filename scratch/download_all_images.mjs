import fs from 'fs';
import path from 'path';
import https from 'https';

const contentPath = 'C:\\Users\\Cheslin Gabriels\\.gemini\\antigravity-ide\\brain\\2f713f91-d4e7-43e0-bdf5-381687925969\\.system_generated\\steps\\311\\content.md';
const content = fs.readFileSync(contentPath, 'utf8');

// Find all matches for images/...
const imageMatches = [...content.matchAll(/(?:src=["']|url\(|data-bgimage=["']url\()(images\/[^"'\)]+)["'\)]/g)].map(m => m[1]);
const uniqueImages = [...new Set(imageMatches)];
console.log('Found unique images:', uniqueImages);

const baseUrl = 'https://madebydesignesia.com/themes/intrio/';
const publicDir = path.resolve('public');

function download(relPath) {
  return new Promise((resolve, reject) => {
    const fullUrl = baseUrl + relPath;
    const dest = path.join(publicDir, relPath);
    fs.mkdirSync(path.dirname(dest), { recursive: true });

    const file = fs.createWriteStream(dest);
    https.get(fullUrl, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log('Downloaded:', relPath);
          resolve(true);
        });
      } else {
        console.error(`Failed ${response.statusCode} for ${relPath}`);
        file.close();
        resolve(false);
      }
    }).on('error', (err) => {
      console.error(`Error for ${relPath}:`, err.message);
      resolve(false);
    });
  });
}

async function run() {
  // Also add some additional images that might be needed, like icon.webp, logo.webp, logo-black.webp
  const extraImages = [
    'images/icon.webp',
    'images/logo.webp',
    'images/logo-black.webp',
    'images/logo-white.webp',
    'images/ui/up-right-arrow.webp',
    'images/misc/up-right-arrow.webp',
    'images/misc/s1.webp',
    'images/misc/signature.webp',
    'images/slider/1.webp',
    'images/slider/2.webp',
    'images/background/1.webp',
    'images/background/2.webp',
  ];

  const allToDownload = [...new Set([...uniqueImages, ...extraImages])];
  console.log(`Starting download of ${allToDownload.length} images...`);

  for (const img of allToDownload) {
    await download(img);
  }
  console.log('All image downloads complete!');
}

run();
