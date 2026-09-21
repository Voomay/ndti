import fs from 'fs';
import path from 'path';
import https from 'https';

const baseUrl = 'https://madebydesignesia.com/themes/intrio/';

const fontFiles = [
  'fonts/icofont/icofont.min.css',
  'fonts/icofont/fonts/icofont.woff2',
  'fonts/icofont/fonts/icofont.woff',
  'fonts/fontawesome6/css/fontawesome.css',
  'fonts/fontawesome6/css/brands.css',
  'fonts/fontawesome6/css/solid.css',
  'fonts/fontawesome6/webfonts/fa-solid-900.woff2',
  'fonts/fontawesome6/webfonts/fa-brands-400.woff2',
  'fonts/fontawesome4/css/font-awesome.css',
  'fonts/fontawesome4/fonts/fontawesome-webfont.woff2',
];

function download(relPath) {
  return new Promise((resolve) => {
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
        console.log('Status', res.statusCode, 'for', relPath);
        file.close();
        resolve(false);
      }
    }).on('error', (err) => {
      console.log('Error:', relPath, err.message);
      resolve(false);
    });
  });
}

async function run() {
  for (const f of fontFiles) {
    await download(f);
  }
}

run();
