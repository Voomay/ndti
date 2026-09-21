import fs from 'node:fs';

const ts = fs.readFileSync('c:/Users/Cheslin Gabriels/OneDrive/Desktop/ndti/src/data/portfolioData.ts', 'utf8');
const jsonStr = ts.substring(ts.indexOf('PORTFOLIO_ITEMS: ProjectItem[] = ') + 'PORTFOLIO_ITEMS: ProjectItem[] = '.length, ts.lastIndexOf(';'));
const items = JSON.parse(jsonStr);

const cats = ['kitchens', 'bedrooms', 'bathrooms', 'bars', 'study-office', 'reception-counter'];
const found = {};
for (const c of cats) {
  found[c] = items.filter(it => it.categories.includes(c)).slice(0, 3).map(it => it.imageUrl);
}
console.log(JSON.stringify(found, null, 2));
