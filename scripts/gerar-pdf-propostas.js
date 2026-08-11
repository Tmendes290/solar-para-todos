const { chromium } = require('playwright');
const path = require('path');

const alvos = [
  {
    html: '../saidas/proposta-solar-para-todos/index.html',
    pdf: '../saidas/proposta-solar-para-todos/proposta-solar-para-todos.pdf',
  },
  {
    html: '../saidas/proposta-fechamento-solar-para-todos/index.html',
    pdf: '../saidas/proposta-fechamento-solar-para-todos/proposta-fechamento-solar-para-todos.pdf',
  },
  {
    html: '../saidas/contrato-comercial-modelo/index.html',
    pdf: '../saidas/contrato-comercial-modelo/contrato-comercial-modelo.pdf',
  },
];

(async () => {
  const browser = await chromium.launch();

  for (const alvo of alvos) {
    const page = await browser.newPage();
    const htmlPath = 'file://' + path.resolve(__dirname, alvo.html);
    await page.goto(htmlPath, { waitUntil: 'networkidle' });
    const pdfPath = path.resolve(__dirname, alvo.pdf);
    await page.pdf({
      path: pdfPath,
      width: '900px',
      printBackground: true,
      margin: { top: '0px', bottom: '0px', left: '0px', right: '0px' },
    });
    console.log(`Gerado: ${alvo.pdf}`);
    await page.close();
  }

  await browser.close();
})();
