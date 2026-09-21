const fs = require('fs');

['why-choose-us.html', 'faq.html'].forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    const target = file === 'why-choose-us.html' ? 'index.html#why-choose-us' : 'index.html#faq';
    if (!content.includes('http-equiv="refresh"')) {
      content = content.replace('<head>', `<head>\n    <meta http-equiv="refresh" content="0; url=${target}">`);
      fs.writeFileSync(file, content, 'utf8');
      console.log('Added redirect to ' + file);
    }
  }
});
