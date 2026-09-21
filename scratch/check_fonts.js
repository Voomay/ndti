import https from 'https';

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  const files = ['css/style.css', 'css/bootstrap.min.css', 'css/plugins.css', 'css/coloring.css', 'css/colors/scheme-01.css'];
  for (const f of files) {
    const text = await get('https://madebydesignesia.com/themes/intrio/' + f);
    const m = text.match(/--(?:body|heading|main|title|sub)-font[^;]+/g);
    if (m) console.log(f, 'variables:', m);
    const googleFont = text.match(/https:\/\/fonts\.googleapis\.com\/css2\?[^'"\)]+/g);
    if (googleFont) console.log(f, 'Google fonts:', googleFont);
  }
}

run();
