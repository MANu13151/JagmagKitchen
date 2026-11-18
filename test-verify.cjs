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

  // Check all images on desktop
  const desktopImages = await desktopPage.$$eval('img', imgs => imgs.map(img => ({
    src: img.src,
    alt: img.alt,
    complete: img.complete,
    naturalWidth: img.naturalWidth,
    naturalHeight: img.naturalHeight
  })));

  console.log("Desktop Images found:", desktopImages.length);
  desktopImages.forEach(img => {
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

  // Check Floating Mobile Bar visibility
  const floatingBar = await mobilePage.$('text=Table QR Menu');
  if (!floatingBar) {
    errors.push("Floating Mobile Bar with 'Table QR Menu' button not found on mobile viewport!");
  } else {
    console.log("Floating Mobile Bar is active and visible on mobile viewport.");
  }

  // Save mobile screenshot
  const mobileScreenshot = path.join(__dirname, 'mobile-390x844.png');
  await mobilePage.screenshot({ path: mobileScreenshot });
  console.log("Saved mobile screenshot to:", mobileScreenshot);

  // 3. Test Mobile QR Modal Opening via Floating Mobile Bar
  console.log("\nTesting Mobile QR Modal Opening via Floating Mobile Bar...");
  await floatingBar.click();
  await mobilePage.waitForTimeout(500);

  const qrTitle = await mobilePage.$eval('text=Contactless Table QR Experience', el => !!el);
  console.log("Mobile QR Modal opened successfully:", qrTitle);
  if (!qrTitle) {
    errors.push("Mobile QR Modal failed to open upon clicking Floating Mobile Bar button!");
  }

  // Take screenshot of mobile QR modal in Simulator mode
  const mobileModalSimScreenshot = path.join(__dirname, 'mobile-qr-modal-simulator.png');
  await mobilePage.screenshot({ path: mobileModalSimScreenshot });
  console.log("Saved mobile QR simulator screenshot to:", mobileModalSimScreenshot);

  // Switch to Scan with Phone tab
  console.log("Switching to 'Scan with Phone' tab...");
  const scanTabBtn = await mobilePage.$('button:has-text("Scan with Phone")');
  if (scanTabBtn) {
    await scanTabBtn.click();
    await mobilePage.waitForTimeout(400);

    const qrImg = await mobilePage.$eval('img[alt="Scan to open Jagmag on mobile"]', img => ({
      src: img.src,
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight
    }));
    console.log("Scannable QR Image loaded:", qrImg);
    if (!qrImg.naturalWidth || qrImg.naturalWidth === 0) {
      errors.push("Scannable QR SVG failed to render or has 0 naturalWidth!");
    }

    const mobileModalScanScreenshot = path.join(__dirname, 'mobile-qr-modal-scan.png');
    await mobilePage.screenshot({ path: mobileModalScanScreenshot });
    console.log("Saved mobile QR scan screenshot to:", mobileModalScanScreenshot);
  } else {
    errors.push("Could not find 'Scan with Phone' tab button!");
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