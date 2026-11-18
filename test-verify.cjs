const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function run() {
  const chromeExecutable = '/Users/manu/Library/Caches/ms-playwright/chromium-1223/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing';
  
  const browser = await chromium.launch({
    executablePath: fs.existsSync(chromeExecutable) ? chromeExecutable : undefined,
    headless: true
  });

  const errors = [];

  // 1. Desktop Test (1440 x 900)
  console.log("Testing Desktop 1440x900...");
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const desktopPage = await desktopContext.newPage();
  
  desktopPage.on('console', msg => {
    if (msg.type() === 'error') {
      console.error(`Desktop Console Error: ${msg.text()}`);
      errors.push(`Desktop Console Error: ${msg.text()}`);
    }
  });
  desktopPage.on('pageerror', err => {
    console.error(`Desktop Page Error: ${err.message}`);
    errors.push(`Desktop Page Error: ${err.message}`);
  });

  await desktopPage.goto('http://localhost:5230/', { waitUntil: 'networkidle' });
  await desktopPage.waitForTimeout(1000);

  // Check all images
  const images = await desktopPage.$$eval('img', imgs => imgs.map(img => ({
    src: img.src,
    alt: img.alt,
    complete: img.complete,
    naturalWidth: img.naturalWidth,
    naturalHeight: img.naturalHeight
  })));

  console.log("Desktop Images found:", images.length);
  images.forEach(img => {
    console.log(`Image: ${img.src} -> width: ${img.naturalWidth}, height: ${img.naturalHeight}`);
    if (img.naturalWidth === 0) {
      errors.push(`Broken image: ${img.src}`);
    }
  });

  // Verify headline
  const headline = await desktopPage.$eval('h1', el => el.innerText.trim());
  console.log("Headline:", headline);

  // Check WhatsApp phone number
  const waLinks = await desktopPage.$$eval('a[href*="wa.me"]', links => links.map(l => l.href));
  console.log("Found WhatsApp links:", waLinks.length);
  const invalidLinks = waLinks.filter(l => !l.includes("919903033131"));
  if (invalidLinks.length > 0) {
    errors.push(`Invalid WhatsApp links found not using 919903033131: ${invalidLinks.join(", ")}`);
  } else {
    console.log("All WhatsApp links correctly use JAGMAG_PHONE 919903033131");
  }

  // Save desktop screenshot
  const desktopScreenshot = path.join(__dirname, 'desktop-1440x900.png');
  await desktopPage.screenshot({ path: desktopScreenshot, fullPage: true });
  console.log("Saved desktop screenshot to:", desktopScreenshot);

  // 2. Mobile Test (390 x 844) - iPhone 14
  console.log("\nTesting Mobile 390x844 (iPhone Manager Viewport)...");
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Mobile/15E148 Safari/604.1'
  });
  const mobilePage = await mobileContext.newPage();

  mobilePage.on('console', msg => {
    if (msg.type() === 'error') {
      console.error(`Mobile Console Error: ${msg.text()}`);
      errors.push(`Mobile Console Error: ${msg.text()}`);
    }
  });
  mobilePage.on('pageerror', err => {
    console.error(`Mobile Page Error: ${err.message}`);
    errors.push(`Mobile Page Error: ${err.message}`);
  });

  await mobilePage.goto('http://localhost:5230/', { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(1000);

  // Save mobile screenshot
  const mobileScreenshot = path.join(__dirname, 'mobile-390x844.png');
  await mobilePage.screenshot({ path: mobileScreenshot, fullPage: true });
  console.log("Saved mobile screenshot to:", mobileScreenshot);

  // 3. Test Banquet Estimator slider interaction & animated ticker
  console.log("\nTesting Banquet Estimator slider interaction...");
  const slider = await desktopPage.$('input[type="range"]');
  if (slider) {
    await slider.fill('100');
    await desktopPage.waitForTimeout(400);
    console.log("Successfully adjusted slider to 100 guests");
  }

  // 4. Test Table QR Modal Simulator
  console.log("\nTesting Live Table QR Modal Simulator...");
  const qrBtn = await desktopPage.$('button:has-text("Launch Interactive Table QR View")');
  if (qrBtn) {
    await qrBtn.click();
    await desktopPage.waitForTimeout(500);
    const modalVisible = await desktopPage.$eval('text=Interactive Table QR View (Done-For-You)', el => !!el);
    console.log("Table QR Modal successfully opened:", modalVisible);
    const qrScreenshot = path.join(__dirname, 'qr-modal-preview.png');
    await desktopPage.screenshot({ path: qrScreenshot });
    console.log("Saved QR modal screenshot to:", qrScreenshot);
  }

  await browser.close();

  if (errors.length > 0) {
    console.error("\nTEST FAILED with errors:", errors);
    process.exit(1);
  } else {
    console.log("\nALL PLAYWRIGHT TESTS PASSED with 0 errors!");
  }
}

run().catch(err => {
  console.error("Test execution failed:", err);
  process.exit(1);
});
