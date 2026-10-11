const fs = require('fs');
const path = require('path');

const rawDir = path.join(__dirname, 'public', 'images', 'raw');
const baseDir = path.join(__dirname, 'public', 'images');

const mapping = [
  { src: 'Think Loom.png', dest: 'brand/thinkloom-logo.png' },
  
  // Messiah Sports
  { src: 'Messiah poster 1.png', dest: 'projects/messiah-sports/socks-campaign.png' },
  { src: 'Messiah poster.png', dest: 'projects/messiah-sports/football-boots.png' },
  { src: 'Messiah logo mockups.png', dest: 'projects/messiah-sports/stockings-board.png' },
  { src: 'Messiah Sports1.png', dest: 'projects/messiah-sports/brand-identity.png' },
  { src: 'Messiah logo.png', dest: 'projects/messiah-sports/emblem.png' },

  // Ramyas Jeweller
  { src: 'Ramyas_Jeweller_Diwali_Savings_4.png', dest: 'projects/ramyas-jeweller/diwali-savings-scheme-brochure.png' },
  { src: 'Ramyas Jeweller poster.png', dest: 'projects/ramyas-jeweller/diwali-savings-poster.png' },
  { src: 'RJ1.jpeg', dest: 'projects/ramyas-jeweller/gold-silver-rate-july7.jpeg' },
  { src: 'RJ2.jpeg', dest: 'projects/ramyas-jeweller/gold-silver-rate-july8.jpeg' },
  { src: 'RJ3.jpeg', dest: 'projects/ramyas-jeweller/gold-silver-rate-sep21.jpeg' },
  { src: '4.png', dest: 'projects/ramyas-jeweller/brand-identity-gold.png' },
  { src: '6.png', dest: 'projects/ramyas-jeweller/monogram-vel.png' },

  // Lensora
  { src: '1.png', dest: 'projects/lensora/logo-dark.png' },
  { src: '2.png', dest: 'projects/lensora/logo-light.png' },

  // Blue Waves FC
  { src: 'Blue waves FC logo.png', dest: 'projects/blue-waves-fc/club-crest.png' },

  // Swanzaa
  { src: 'swanzaa logo (2).png', dest: 'projects/swanzaa/emblem-dark.png' },
  { src: 'swanzaa logo.png', dest: 'projects/swanzaa/emblem-white.png' },

  // Pretty Makeover Artistry
  { src: 'Untitled design.png', dest: 'projects/pretty-makeover/brand-logo.png' },
  { src: 'House Warming.png', dest: 'projects/pretty-makeover/housewarming-invitation.png' },

  // Kuttyverse
  { src: 'Kuttyverse Invitation.png', dest: 'projects/kuttyverse/grand-opening-invitation.png' },
  { src: 'KUTTYVERSE Logo.png', dest: 'projects/kuttyverse/brand-logo.png' },

  // Football Fan Artwork
  { src: 'Phone Wallpaper.png', dest: 'projects/football-wallpaper/cr7-celebration-wallpaper.png' },
];

for (const item of mapping) {
  const srcPath = path.join(rawDir, item.src);
  const destPath = path.join(baseDir, item.dest);
  const dir = path.dirname(destPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Organized: ${item.src} -> ${item.dest}`);
  } else {
    console.warn(`Source not found: ${srcPath}`);
  }
}

console.log('Finished organizing all assets into public/images/');
