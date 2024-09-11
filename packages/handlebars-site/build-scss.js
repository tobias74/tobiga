const fs = require('fs-extra');
const path = require('path');
const sass = require('sass');

// Paths for SCSS and output
const scssDir = path.join(__dirname, 'scss'); // SCSS directory
const distCssDir = path.join(__dirname, 'dist', 'css'); // Output CSS directory

// Ensure the dist/css directory exists
if (!fs.existsSync(distCssDir)) {
    fs.mkdirSync(distCssDir, { recursive: true });
}

// Compile SCSS to CSS
fs.readdirSync(scssDir).forEach((file) => {
    if (path.extname(file) === '.scss') {
        const scssFile = path.join(scssDir, file);
        const cssOutputFile = path.join(distCssDir, `${path.basename(file, '.scss')}.css`);

        // Compile SCSS to CSS
        const result = sass.renderSync({ file: scssFile });
        fs.writeFileSync(cssOutputFile, result.css);
        console.log(`Compiled SCSS: ${file} to ${cssOutputFile}`);
    }
});
