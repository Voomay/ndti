import https from 'https';
import fs from 'fs';

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
  const style = await get('https://madebydesignesia.com/themes/intrio/css/style.css');
  const coloring = await get('https://madebydesignesia.com/themes/intrio/css/coloring.css');
  const scheme = await get('https://madebydesignesia.com/themes/intrio/css/colors/scheme-01.css');

  console.log('style.css length:', style.length);
  console.log('coloring.css length:', coloring.length);
  console.log('scheme.css length:', scheme.length);

  // Let's search for specific classes
  const classes = [
    'btn-main', 'fx-slide', 'subtitle', 'de-step', 'de-step-arrow', 'de-step-icon',
    'gradient-edge', 'bg-blur', 'extra-text', 'player', 'accordion', 'de_count',
    'de-custom-nav', 'circle', 'jarallax', 'sw-overlay', 'section-dark'
  ];

  for (const c of classes) {
    const regex = new RegExp(`\\.${c}[^{]*\\{[^}]+\\}`, 'g');
    const matches = style.match(regex);
    if (matches) {
      console.log(`=== Matches for .${c} ===`);
      console.log(matches.slice(0, 3).join('\n'));
    }
  }
}

run();
