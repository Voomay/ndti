import fs from 'fs';
import path from 'path';
import https from 'https';

const baseUrl = 'https://madebydesignesia.com/themes/intrio/';
const cssFiles = [
  'css/bootstrap.min.css',
  'css/plugins.css',
  'css/swiper.css',
  'css/style.css',
  'css/coloring.css',
  'css/colors/scheme-01.css'
];

function download(relPath) {
  return new Promise((resolve, reject) => {
    const fullUrl = baseUrl + relPath;
    const dest = path.resolve('public', relPath);
    fs.mkdirSync(path.dirname(dest), { recursive: true });

    const file = fs.createWriteStream(dest);
    https.get(fullUrl, (res) => {
      if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log('Saved:', relPath);
          resolve(true);
        });
      } else {
        console.error('Failed:', res.statusCode, relPath);
        file.close();
        resolve(false);
      }
    }).on('error', (err) => {
      console.error('Error:', relPath, err.message);
      resolve(false);
    });
  });
}

async function run() {
  for (const f of cssFiles) {
    await download(f);
  }
  console.log('All CSS downloaded successfully!');
}

run();
