const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });
  const htmlPath = 'file://' + path.resolve(__dirname, '../saidas/site-solar-para-todos/index.html');
  await page.goto(htmlPath, { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.resolve(__dirname, '../saidas/apresentacao-fechamento-solar-para-todos/print-site.png') });
  await browser.close();
  console.log('Print do site salvo.');
})();
