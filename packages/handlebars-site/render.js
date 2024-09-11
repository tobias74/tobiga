const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');
const sass = require('sass'); // Import Sass
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

// Define paths for templates, layouts, partials, SCSS, and output directory
const templatesDir = path.join(__dirname, 'templates');
const layoutsDir = path.join(templatesDir, 'layouts');  // Define layouts directory
const partialsDir = path.join(templatesDir, 'partials');
const pagesDir = path.join(templatesDir, 'pages');
const scssDir = path.join(__dirname, 'scss');  // Path to SCSS folder
const outputDir = path.join(__dirname, 'dist');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Ensure CSS directory exists in output
const outputCssDir = path.join(outputDir, 'css');
if (!fs.existsSync(outputCssDir)) {
    fs.mkdirSync(outputCssDir, { recursive: true });
}

// Compile SCSS to CSS and output to dist/css/
fs.readdirSync(scssDir).forEach((file) => {
    if (path.extname(file) === '.scss') {
        const scssFile = path.join(scssDir, file);
        const cssOutputFile = path.join(outputCssDir, `${path.basename(file, '.scss')}.css`);

        // Compile SCSS to CSS
        const result = sass.renderSync({ file: scssFile });

        // Process CSS with PostCSS (Tailwind and Autoprefixer)
        postcss([tailwindcss, autoprefixer])
            .process(result.css, { from: undefined })
            .then((output) => {
                fs.writeFileSync(cssOutputFile, output.css);
                console.log(`Compiled SCSS + Tailwind: ${file} to ${cssOutputFile}`);
            })
            .catch((err) => {
                console.error(`Error processing CSS with Tailwind: ${err}`);
            });
    }
});

// Register all partials from the partials directory
fs.readdirSync(partialsDir).forEach((file) => {
    if (path.extname(file) === '.hbs') {
        const partialName = path.basename(file, '.hbs');
        const partialTemplate = fs.readFileSync(path.join(partialsDir, file), 'utf8');
        Handlebars.registerPartial(partialName, partialTemplate);
        console.log(`Registered partial: ${partialName}`);
    }
});

// Register a custom helper to dynamically load and compile layouts
Handlebars.registerHelper('dynamicLayout', function (layoutName, options) {
    const layoutPath = path.join(layoutsDir, `${layoutName}.hbs`);
    const layoutTemplate = fs.readFileSync(layoutPath, 'utf8');
    const compiledLayout = Handlebars.compile(layoutTemplate);
    return compiledLayout({ ...this, body: options.fn(this) }); // Merge content into the body
});

// Sample global data (optional)
const globalData = {
    siteName: 'My Website',
    year: new Date().getFullYear(),
};

// Function to compile and write HTML
const compileTemplate = (templatePath, outputFile, data = {}) => {
    const templateSource = fs.readFileSync(templatePath, 'utf8');
    const template = Handlebars.compile(templateSource);

    const result = template({ ...globalData, ...data });
    fs.writeFileSync(outputFile, result, 'utf8');
    console.log(`Generated: ${outputFile}`);
};

// Compile all .hbs files in the pages directory
fs.readdirSync(pagesDir).forEach((file) => {
    if (path.extname(file) === '.hbs') {
        const templatePath = path.join(pagesDir, file);
        const outputFile = path.join(outputDir, `${path.basename(file, '.hbs')}.html`);
        compileTemplate(templatePath, outputFile);
    }
});

console.log('Handlebars templates and SCSS compiled successfully.');
