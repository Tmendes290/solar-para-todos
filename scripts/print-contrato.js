const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });
  const htmlPath = 'file://' + path.resolve(__dirname, '../saidas/contrato-comercial-modelo/index.html');
  await page.goto(htmlPath, { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.resolve(__dirname, '../saidas/apresentacao-fechamento-solar-para-todos/print-contrato.png') });
  await browser.close();
  console.log('Print do contrato salvo.');
})();
