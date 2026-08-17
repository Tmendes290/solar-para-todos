const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  // largura próxima da área útil real de uma página A4 (12mm de margem),
  // pra capa ficar com as mesmas proporções que sai no PDF de verdade
  const page = await browser.newPage({ viewport: { width: 760, height: 1400 } });
  const htmlPath = 'file://' + path.resolve(__dirname, '../saidas/contrato-comercial-modelo/index.html');
  await page.goto(htmlPath, { waitUntil: 'networkidle' });
  await page.emulateMedia({ media: 'print' });

  const capa = await page.$('.capa');
  await capa.screenshot({ path: path.resolve(__dirname, '../saidas/apresentacao-fechamento-solar-para-todos/print-contrato.png') });

  await browser.close();
  console.log('Print do contrato (página inteira) salvo.');
})();
