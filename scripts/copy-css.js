const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src', 'css');
const distDir = path.join(__dirname, '..', 'dist', 'css');

// Ensure dist/css exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy all CSS files (like splide-core.min.css)
function copyAllCssFiles() {
  if (!fs.existsSync(srcDir)) {
    console.log('⚠️ No src/css directory found');
    return;
  }
  
  const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.css'));
  files.forEach(file => {
    fs.copyFileSync(path.join(srcDir, file), path.join(distDir, file));
  });
  console.log('✅ CSS files copied');
}

copyAllCssFiles();
