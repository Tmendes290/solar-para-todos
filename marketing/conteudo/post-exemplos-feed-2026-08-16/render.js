const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1080, height: 1350 });

  const htmlPath = 'file://' + path.resolve(__dirname, 'posts.html');
  await page.goto(htmlPath, { waitUntil: 'networkidle' });

  const slides = await page.$$('.slide');
  const outDir = path.join(__dirname, 'instagram');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

  for (let i = 0; i < slides.length; i++) {
    const num = String(i + 1).padStart(2, '0');
    await slides[i].screenshot({ path: path.join(outDir, `exemplo-${num}.png`) });
    console.log(`exemplo-${num}.png salvo`);
  }

  await browser.close();
})();
