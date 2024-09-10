const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Paths for the Handlebars and React projects
const handlebarsPath = path.join(__dirname, 'packages/handlebars-site');
const reactAppPath = path.join(__dirname, 'packages/react-app');
const handlebarsDistPath = path.join(handlebarsPath, 'dist'); // Adjusted to use dist folder
const staticTargetPath = path.join(reactAppPath, 'public', 'static');

// Helper to run shell commands
const runCommand = (command, workingDir) => {
    console.log(`Running: ${command} in ${workingDir}`);
    execSync(command, { cwd: workingDir, stdio: 'inherit' });
};

// Function to build the Handlebars project and copy output to React app
const buildHandlebarsAndCopy = () => {
    try {
        // Step 1: Build the Handlebars project
        console.log('Building Handlebars project...');
        runCommand('npm install', handlebarsPath);
        runCommand('npm run build', handlebarsPath); // Runs render.js to generate HTML files in dist/

        // Step 2: Copy Handlebars output to React public/static folder
        console.log('Copying Handlebars output to React public/static folder...');

        // Ensure React public/static folder exists
        if (!fs.existsSync(staticTargetPath)) {
            fs.mkdirSync(staticTargetPath, { recursive: true });
        }

        // Copy all files from Handlebars dist/ to React public/static
        fs.readdirSync(handlebarsDistPath).forEach((file) => {
            const sourceFile = path.join(handlebarsDistPath, file);
            const targetFile = path.join(staticTargetPath, file);
            fs.copyFileSync(sourceFile, targetFile);
            console.log(`Copied ${file} to ${targetFile}`);
        });

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
