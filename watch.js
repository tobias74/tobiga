const { buildHandlebarsAndCopy } = require('./build.js');
const nodemon = require('nodemon');

// Configure nodemon to watch the Handlebars template files
nodemon({
    script: 'build.js', // Placeholder script for nodemon
    ext: 'hbs js json', // File extensions to watch
    watch: ['packages/handlebars-site/templates'], // Watch the Handlebars templates folder
    exec: 'node -e "require(\'./build.js\').buildHandlebarsAndCopy()"', // Command to run on changes
});

// Log nodemon events
nodemon
    .on('start', () => console.log('Watching for changes in Handlebars templates...'))
    .on('restart', files => console.log('Changes detected in: ', files))
    .on('quit', () => {
        console.log('Stopping Handlebars watch process.');
        process.exit();
    });
