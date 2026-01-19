const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src', 'js');
const distDir = path.join(__dirname, '..', 'dist', 'js');

// Ensure dist/js exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy all JS files initially
function copyAllJsFiles() {
  const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.js'));
  files.forEach(file => {
    fs.copyFileSync(path.join(srcDir, file), path.join(distDir, file));
  });
  console.log('✅ JS files copied');
}

copyAllJsFiles();

// Watch for changes
console.log('👀 Watching JS files for changes...');
fs.watch(srcDir, (eventType, filename) => {
  if (filename && filename.endsWith('.js')) {
    try {
      fs.copyFileSync(path.join(srcDir, filename), path.join(distDir, filename));
      console.log(`✅ Updated: ${filename}`);
    } catch (err) {
      console.error(`❌ Error copying ${filename}:`, err.message);
    }
  }
});
