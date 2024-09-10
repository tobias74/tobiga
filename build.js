const { execSync } = require('child_process');
const fs = require('fs-extra'); // Use fs-extra for easier folder copying
const path = require('path');
const sass = require('sass'); // Import Sass

// Paths for the Handlebars and React projects
const handlebarsPath = path.join(__dirname, 'packages/handlebars-site');
const reactAppPath = path.join(__dirname, 'packages/react-app');
const handlebarsDistPath = path.join(handlebarsPath, 'dist'); // Handlebars output directory
const staticTargetPath = path.join(reactAppPath, 'public', 'static');
const scssDir = path.join(handlebarsPath, 'scss'); // SCSS directory

// Helper to run shell commands
const runCommand = (command, workingDir) => {
    console.log(`Running: ${command} in ${workingDir}`);
    execSync(command, { cwd: workingDir, stdio: 'inherit' });
};

// Function to compile SCSS to CSS and copy to dist
const compileScss = () => {
    const outputCssDir = path.join(handlebarsDistPath, 'css');

    // Ensure the dist/css directory exists
    if (!fs.existsSync(outputCssDir)) {
        fs.mkdirSync(outputCssDir, { recursive: true });
    }

    // Compile SCSS files to CSS and copy to dist/css/
    fs.readdirSync(scssDir).forEach((file) => {
        if (path.extname(file) === '.scss') {
            const scssFile = path.join(scssDir, file);
            const cssOutputFile = path.join(outputCssDir, `${path.basename(file, '.scss')}.css`);

            // Compile SCSS to CSS
            const result = sass.renderSync({ file: scssFile });
            fs.writeFileSync(cssOutputFile, result.css);
            console.log(`Compiled SCSS: ${file} to ${cssOutputFile}`);
        }
    });
};

// Function to build the Handlebars project and copy output to React app
const buildHandlebarsAndCopy = () => {
    try {
        // Step 1: Build the Handlebars project
        console.log('Building Handlebars project...');
        runCommand('npm install', handlebarsPath);
        runCommand('npm run build', handlebarsPath); // Runs render.js to generate HTML files in dist/

        // Step 2: Compile SCSS to CSS
        console.log('Compiling SCSS...');
        compileScss();

        // Step 3: Copy Handlebars output (HTML and CSS) to React public/static folder
        console.log('Copying Handlebars dist folder to React public/static folder...');

        // Copy entire dist folder to public/static
        fs.copySync(handlebarsDistPath, staticTargetPath, { overwrite: true });
        console.log(`Copied ${handlebarsDistPath} to ${staticTargetPath}`);

    } catch (error) {
        console.error('Failed to build Handlebars and copy files:', error);
        process.exit(1); // Exit with a failure code
    }
};

// Function to build the React project after Handlebars files are copied
const buildReactApp = () => {
    try {
        console.log('Building React project...');
        runCommand('npm install', reactAppPath);
        runCommand('npm run build', reactAppPath);
    } catch (error) {
        console.error('Failed to build React project:', error);
        process.exit(1); // Exit with a failure code
    }
};

// Main function to build both projects
const buildAll = () => {
    buildHandlebarsAndCopy(); // Build Handlebars and copy to React
    buildReactApp();          // Build React
};

// Execute the buildAll function if this script is run directly
if (require.main === module) {
    buildAll();
}

// Export functions to be used in other scripts (like watch.js)
module.exports = { buildAll, buildHandlebarsAndCopy };
