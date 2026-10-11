const fs = require('fs');
const path = require('path');

const downloadsDir = 'C:\\Users\\Anith\\Downloads';
const targetDir = 'd:\\Designer Portfolio\\public\\images\\raw';

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const files = fs.readdirSync(downloadsDir);
const imageFiles = files.filter(f => /\.(png|jpe?g|webp|svg)$/i.test(f));

for (const file of imageFiles) {
  const src = path.join(downloadsDir, file);
  const dest = path.join(targetDir, file);
  fs.copyFileSync(src, dest);
  console.log(`Copied ${file} (${fs.statSync(dest).size} bytes)`);
}

// Copy billing directory images as well
const billingDir = path.join(downloadsDir, 'Ramyas Jeweller billing');
const billingTargetDir = path.join(targetDir, 'ramyas-billing');
if (fs.existsSync(billingDir)) {
  if (!fs.existsSync(billingTargetDir)) {
    fs.mkdirSync(billingTargetDir, { recursive: true });
  }
  const billingFiles = fs.readdirSync(billingDir).filter(f => /\.(png|jpe?g|webp|svg)$/i.test(f));
  for (const bfile of billingFiles) {
    fs.copyFileSync(path.join(billingDir, bfile), path.join(billingTargetDir, bfile));
    console.log(`Copied billing: ${bfile}`);
  }
}

console.log('Finished copying all raw image files.');
