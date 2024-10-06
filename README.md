# Tobiga: Project and GitHub Contributions Showcase

This project is a personal webpage that showcases my projects, GitHub contributions, and publications. It is built using two parts:

1. **React App**: A frontend built with React to display projects, GitHub contributions, and publications with multi-language support.
2. **Handlebars Static Site Generator**: A static site generator that creates HTML pages using Handlebars templates, SCSS, and PostCSS (with Tailwind CSS).

## Features

- **Projects Section**: Displays various projects with links to live versions and source code repositories.
- **GitHub Contributions Section**: Lists GitHub repositories and contributions with language details and repository links.
- **Publications Section**: Shows a list of publications with links to read articles.
- **Contact Section**: Simple contact section to provide easy access for communication.
- **Responsive Design**: Adapted for various screen sizes and supports both light and dark themes.
- **Multi-Language Support**: Built with i18next for React, and locale-based Handlebars templates for the static pages.
- **Scroll-Based Navigation**: Automatically scrolls to sections based on the hash in the URL.
- **Dynamic Handlebars Layouts**: Custom Handlebars helper to dynamically load layouts.

## Tech Stack

### React App:

- **React**: Front-end framework for building the UI.
- **Chakra UI**: Component library for building a modern and responsive design.
- **i18next**: For handling translations and localization.

### Handlebars Static Site:

- **Handlebars**: Template engine to create static HTML pages.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **SCSS**: For styling with PostCSS for processing.
- **Autoprefixer**: Automatically adds vendor prefixes to CSS rules for better cross-browser compatibility.
- **Nodemon**: For watching changes and automating builds.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/tobias74/tobiga.git
```

2. Navigate to the project directory:

```bash
cd tobiga
```

3. Install dependencies for both projects:

```bash
npm install
```

4. Run the development environment:

```bash
npm run dev
```

This will run both the React app and watch for changes in the Handlebars templates and SCSS files.

## Building the Project

To build both the React app and the Handlebars static templates:

```bash
npm run build-all
```

## Handlebars Site Structure

The Handlebars project generates static HTML files and CSS from SCSS with the following structure:

- **templates/layouts**: Handlebars layouts (e.g., main layout).
- **templates/pages**: Handlebars page templates (e.g., `index.hbs`, `privacy.hbs`).
- **scss**: SCSS files for styling the Handlebars-generated pages.
- **locales**: JSON files for handling multi-language support (e.g., `en.json`, `de.json`).

## Development Scripts

- `npm run dev`: Runs the development server for React and watches for changes in the Handlebars templates.
- `npm run build-all`: Builds both the React app and the Handlebars static templates.
- `npm run watch-handlebars`: Watches for changes in Handlebars files and updates the output.
- `npm run copy-handlebars-output`: Copies the compiled Handlebars templates into the React public folder.

## Contributing

Feel free to open issues or submit pull requests to contribute to this project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
