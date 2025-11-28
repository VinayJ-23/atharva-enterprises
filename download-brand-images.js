// Script to download brand images for products
// Run with: node download-brand-images.js

const https = require('https');
const fs = require('fs');
const path = require('path');

// Create brands directory if it doesn't exist
const brandsDir = path.join(__dirname, 'public', 'brands');
if (!fs.existsSync(brandsDir)) {
  fs.mkdirSync(brandsDir, { recursive: true });
}

// Brand image URLs - Replace these with actual brand logo/bag image URLs
const brandImages = {
  // Cement Brands
  'acc.png': 'https://via.placeholder.com/400x500/FF6B35/FFFFFF?text=ACC+Cement',
  'vicat.png': 'https://via.placeholder.com/400x500/4A90E2/FFFFFF?text=Vicat+Cement',
  'ambuja.png': 'https://via.placeholder.com/400x500/50C878/FFFFFF?text=Ambuja+Cement',
  'bangur.png': 'https://via.placeholder.com/400x500/FFD700/000000?text=Bangur+Cement',
  'dalmia.png': 'https://via.placeholder.com/400x500/E74C3C/FFFFFF?text=Dalmia+Cement',
  'jk.png': 'https://via.placeholder.com/400x500/9B59B6/FFFFFF?text=JK+Cement',
  'zuari.png': 'https://via.placeholder.com/400x500/3498DB/FFFFFF?text=Zuari+Cement',
  'deccan.png': 'https://via.placeholder.com/400x500/E67E22/FFFFFF?text=Deccan+Cement',
  'nagarjuna.png': 'https://via.placeholder.com/400x500/1ABC9C/FFFFFF?text=Nagarjuna+Cement',
  
  // Steel Brands
  'tata.png': 'https://via.placeholder.com/400x500/2C3E50/FFFFFF?text=TATA+Steel',
  'jsw.png': 'https://via.placeholder.com/400x500/34495E/FFFFFF?text=JSW+Steel',
  'sail.png': 'https://via.placeholder.com/400x500/7F8C8D/FFFFFF?text=SAIL+Steel',
  'shreeom.png': 'https://via.placeholder.com/400x500/95A5A6/FFFFFF?text=ShreeOm+Steel',
  
  // Construction Materials
  'aac-block.png': 'https://via.placeholder.com/400x500/16A085/FFFFFF?text=AAC+Block',
  'admixture.png': 'https://via.placeholder.com/400x500/27AE60/FFFFFF?text=Admixture',
  'plumbing.png': 'https://via.placeholder.com/400x500/2980B9/FFFFFF?text=Plumbing',
  'white-cement.png': 'https://via.placeholder.com/400x500/ECF0F1/000000?text=White+Cement',
  'iso-certified.png': 'https://via.placeholder.com/400x500/F39C12/FFFFFF?text=ISO+Certified',
  'primer.png': 'https://via.placeholder.com/400x500/D35400/FFFFFF?text=Primer',
};

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(brandsDir, filename);
    const file = fs.createWriteStream(filePath);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✓ Downloaded: ${filename}`);
          resolve();
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirects
        file.close();
        fs.unlinkSync(filePath);
        downloadImage(response.headers.location, filename).then(resolve).catch(reject);
      } else {
        file.close();
        fs.unlinkSync(filePath);
        reject(new Error(`Failed to download ${filename}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
      reject(err);
    });
  });
}

async function downloadAllImages() {
  console.log('Starting to download brand images...\n');
  
  for (const [filename, url] of Object.entries(brandImages)) {
    try {
      await downloadImage(url, filename);
    } catch (error) {
      console.error(`✗ Failed to download ${filename}:`, error.message);
    }
  }
  
  console.log('\n✓ Download complete!');
  console.log('\nNote: These are placeholder images. Replace them with actual brand logos/bags:');
  console.log('1. Find brand logos from official websites or stock photo sites');
  console.log('2. Download and save them to public/brands/ folder');
  console.log('3. Use the exact filenames listed above');
}

downloadAllImages();





