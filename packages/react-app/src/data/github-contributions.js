export const GithubContributions = [
    {
        title: {
            en: 'Improve Error Reporting for Non-Existing Projects in Angular CLI Configuration',
            de: 'Verbesserung der Fehlermeldung bei fehlenden Projektnamen in der Angular CLI-Konfiguration',
        },
        description: {
            en: "In a pull request to Angular's CLI repository, I contributed a fix that improves error messages by displaying the name of a missing project in the angular.json configuration. This update helps developers quickly identify misconfigurations. The pull request was successfully merged on August 13, 2020.",
            de: 'In diesem Pull Request habe ich eine Lösung beigetragen, die die Fehlermeldung bei nicht vorhandenen Projekten in der angular.json Datei optimiert. Die Anpassung zeigt nun den fehlenden Projektnamen an, was Entwicklern dabei hilft, Konfigurationsfehler schneller zu finden und zu beheben. Die Änderung wurde am 13. August 2020 erfolgreich in den Angular CLI Code integriert.'
        },
        languages: ['Javascript', 'Angular'],
        repoLink: 'https://github.com/angular/angular-cli/pull/18502'
    },
    {
        "title": {
            "en": "Adjust Attributions in GoogleMapsTilesCredits for 3DTilesRendererJS",
            "de": "Anpassung der Attributierung in GoogleMapsTilesCredits für 3DTilesRendererJS"
        },
        "description": {
            "en": "This pull request adjusted the way attributions are handled in the GoogleMapsTilesCredits component of 3DTilesRendererJS, ensuring they are displayed in the correct order. The change was merged on March 5, 2024.",
            "de": "Dieser Pull Request passte die Handhabung der Attributierung im GoogleMapsTilesCredits-Komponenten von 3DTilesRendererJS an, sodass sie in der richtigen Reihenfolge angezeigt werden. Die Änderung wurde am 5. März 2024 integriert."
        },
        "languages": ["JavaScript", "Google Maps"],
        "repoLink": "https://github.com/NASA-AMMOS/3DTilesRendererJS/pull/497"
    },
    {
        "title": {
            "en": "Use Only First Intersection with Terrain in geo-three",
            "de": "Nur die erste Terrain-Intersection in geo-three verwenden"
        },
        "description": {
            "en": "This pull request fixed an issue where multiple intersections were used in raycasting for terrain mapping, ensuring that only the first intersection is considered. The fix was merged on July 15, 2024.",
            "de": "Dieser Pull Request behebt ein Problem, bei dem mehrere Schnittpunkte beim Raycasting für die Terrain-Abbildung verwendet wurden, und stellt sicher, dass nur der erste Schnittpunkt berücksichtigt wird. Der Fix wurde am 15. Juli 2024 integriert."
        },
        "languages": ["JavaScript", "Three.js"],
        "repoLink": "https://github.com/tentone/geo-three/pull/69"
    },
    {
        "title": {
            "en": "Call updateMatrixWorld After Performing setLatLonToYUp in 3DTilesRendererJS",
            "de": "Aufruf von updateMatrixWorld nach Ausführung von setLatLonToYUp in 3DTilesRendererJS"
        },
        "description": {
            "en": "This pull request ensured that the `updateMatrixWorld` method is called after performing the `setLatLonToYUp` function, preventing potential one-frame rendering issues. It was merged on January 18, 2024.",
            "de": "Dieser Pull Request stellte sicher, dass die Methode `updateMatrixWorld` nach der Ausführung von `setLatLonToYUp` aufgerufen wird, um mögliche Renderprobleme mit einem einzigen Frame zu verhindern. Die Änderung wurde am 18. Januar 2024 integriert."
        },
        "languages": ["JavaScript", "Three.js"],
        "repoLink": "https://github.com/NASA-AMMOS/3DTilesRendererJS/pull/460"
    },
    {
        "title": {
            "en": "Make BikeCommonFlagEncoder Abstract in GraphHopper",
            "de": "BikeCommonFlagEncoder in GraphHopper als abstrakt definieren"
        },
        "description": {
            "en": "This pull request modified the BikeCommonFlagEncoder class in the GraphHopper project, making it abstract to ensure proper initialization behavior. This change was merged on March 3, 2017.",
            "de": "Dieser Pull Request hat die Klasse BikeCommonFlagEncoder im GraphHopper-Projekt als abstrakt definiert, um das korrekte Initialisierungsverhalten sicherzustellen. Die Änderung wurde am 3. März 2017 integriert."
        },
        "languages": ["Java", "GraphHopper"],
        "repoLink": "https://github.com/graphhopper/graphhopper/pull/941"
    },
    {
        "title": {
            "en": "Add Timeout to Tesseract Call in Tesseract-OCR-for-PHP",
            "de": "Timeout für Tesseract-Aufruf in Tesseract-OCR-for-PHP hinzufügen"
        },
        "description": {
            "en": "This pull request introduced a timeout feature to the Tesseract call in the Tesseract-OCR-for-PHP project, preventing the process from stalling indefinitely. The change was merged on June 4, 2021.",
            "de": "Dieser Pull Request fügte dem Tesseract-Aufruf im Tesseract-OCR-for-PHP-Projekt eine Timeout-Funktion hinzu, um ein endloses Blockieren des Prozesses zu verhindern. Die Änderung wurde am 4. Juni 2021 integriert."
        },
        "languages": ["PHP", "Tesseract OCR"],
        "repoLink": "https://github.com/thiagoalessio/tesseract-ocr-for-php/pull/218"
    },
    {
        title: {
            en: 'Sugarloaf PHP Dependency Injection Framework',
            de: 'Sugarloaf PHP Dependency Injection Framework',
        },
        description: {
            en: "Sugarloaf is a lightweight PHP Dependency Injection framework designed to simplify dependency management within applications. It allows for both constructor and setter injection, while supporting advanced features such as cyclic dependencies and runtime-injected services through providers. With a focus on simplicity and efficiency, Sugarloaf enhances the maintainability and scalability of PHP projects.",
            de: 'Sugarloaf ist ein leichtgewichtiges PHP Dependency Injection Framework, das die Verwaltung von Abhängigkeiten in Anwendungen vereinfacht. Es ermöglicht sowohl Konstruktor- als auch Setter-Injection und unterstützt erweiterte Funktionen wie die Handhabung von zyklischen Abhängigkeiten und runtime-basierte Dienste über Provider. Mit einem Fokus auf Einfachheit und Effizienz verbessert Sugarloaf die Wartbarkeit und Skalierbarkeit von PHP-Projekten.'
        },
        languages: ['PHP'],
        repoLink: 'https://github.com/tobias74/sugarloaf'
    },
    {
        title: {
            en: 'Reverse Geocoder Cache',
            de: 'Reverse Geocoder Cache',
        },
        description: {
            en: 'This project is a PHP-based solution for caching reverse geocoding results, aimed at reducing the number of API requests to services like Google Places. It offers flexibility by allowing dynamic adjustments to accuracy, depending on memory usage and performance needs. This makes it ideal for applications that need frequent and efficient location lookups without sacrificing precision.',
            de: 'Dieses Projekt bietet eine PHP-basierte Lösung zum Zwischenspeichern von Ergebnissen aus Reverse-Geocoding-Services, wie Google Places. Durch das Caching wird die Anzahl der API-Anfragen reduziert, während die Genauigkeit flexibel angepasst werden kann, um je nach Speicherverbrauch und Leistungsanforderungen zu optimieren. Ideal für Anwendungen, die häufige und effiziente Standortabfragen benötigen, ohne dabei an Präzision einzubüßen.'
        },
        languages: ['PHP'],
        repoLink: 'https://github.com/tobias74/reverse-geocoder-cache'
    },
    {
        title: {
            en: 'JavaScript Reverse Geocache',
            de: 'JavaScript Reverse Geocache',
        },
        description: {
            en: "This project is a caching solution for reverse geocoding requests, written in JavaScript. It stores the results of geocoding queries, helping to minimize redundant API calls and improve performance. The cache operates using tile-based precision, allowing adjustable accuracy to balance memory consumption and performance, making it ideal for applications requiring frequent location lookups.",
            de: "Dieses Projekt bietet eine Caching-Lösung für Reverse-Geocoding-Anfragen in JavaScript. Es speichert die Ergebnisse von Geocoding-Anfragen, um redundante API-Aufrufe zu minimieren und die Leistung zu verbessern. Der Cache arbeitet mit einer Kachel-basierten Genauigkeit, die eine anpassbare Präzision ermöglicht, um das Gleichgewicht zwischen Speicherverbrauch und Leistung zu optimieren – ideal für Anwendungen mit häufigen Standortabfragen.",
        },
        languages: ['JavaScript'],
        repoLink: 'https://github.com/tobias74/javascript-reverse-geocache'
    },
    {
        "title": {
            "en": "Fix Temporary Folder Path Bug in Resumable.js",
            "de": "Behebung eines Pfadfehlers im temporären Ordner von Resumable.js"
        },
        "description": {
            "en": "In a pull request to the Resumable.js repository, a bug was fixed regarding the incorrect path for the temporary folder used during file uploads. This fix ensures stability in the upload process and was merged on April 19, 2018.",
            "de": "In einem Pull Request zum Resumable.js-Repository wurde ein Fehler im Pfad des temporären Ordners behoben, der bei Datei-Uploads verwendet wird. Der Fix stellt die Stabilität des Upload-Prozesses sicher und wurde am 19. April 2018 integriert."
        },
        "languages": ["JavaScript"],
        "repoLink": "https://github.com/23/resumable.js/pull/456"
    },
    {
        "title": {
            "en": "Fix Bug in isPublicClient Method of Cassandra Storage for OAuth2 Server PHP",
            "de": "Fehlerbehebung in der isPublicClient-Methode des Cassandra-Storage für OAuth2 Server PHP"
        },
        "description": {
            "en": "This pull request fixed a bug in the isPublicClient method of the Cassandra storage in the OAuth2 Server PHP project. The fix improves client authentication behavior. It was merged on October 6, 2015.",
            "de": "Dieser Pull Request behebt einen Fehler in der isPublicClient-Methode des Cassandra-Storage im OAuth2 Server PHP Projekt. Der Fix verbessert das Verhalten der Client-Authentifizierung. Die Änderung wurde am 6. Oktober 2015 integriert."
        },
        "languages": ["PHP", "Cassandra", "OAuth2"],
        "repoLink": "https://github.com/bshaffer/oauth2-server-php/pull/651"
    },
    {
        "title": {
            "en": "Introduce Timezone Parameter in Handlebars Moment Helper",
            "de": "Einführung des Zeitzonen-Parameters im Handlebars Moment Helper"
        },
        "description": {
            "en": "This pull request added a timezone parameter to the Handlebars moment helper, allowing developers to display dates according to a specified timezone. The feature was merged on January 2, 2017.",
            "de": "Dieser Pull Request fügte dem Handlebars Moment Helper einen Zeitzonen-Parameter hinzu, um Daten in einer festgelegten Zeitzone anzuzeigen. Die Funktion wurde am 2. Januar 2017 integriert."
        },
        "languages": ["JavaScript", "Handlebars"],
        "repoLink": "https://github.com/helpers/handlebars-helper-moment/pull/13"
    },
    {
        "title": {
            "en": "Fix Syntax Error in NgRx Documentation",
            "de": "Behebung eines Syntaxfehlers in der NgRx-Dokumentation"
        },
        "description": {
            "en": "This pull request corrected a syntax error in the official NgRx documentation, ensuring accurate information for developers. The fix was merged on January 6, 2018.",
            "de": "Dieser Pull Request korrigierte einen Syntaxfehler in der offiziellen NgRx-Dokumentation und stellt sicher, dass Entwickler präzise Informationen erhalten. Der Fix wurde am 6. Januar 2018 integriert."
        },
        "languages": ["JavaScript", "NgRx"],
        "repoLink": "https://github.com/ngrx/platform/pull/691"
    },
    {
        "title": {
            "en": "Fix URL to Demo Page in ngx-slimscroll",
            "de": "Korrektur des Demo-Seiten-Links in ngx-slimscroll"
        },
        "description": {
            "en": "This pull request corrected the URL to the demo page in the ngx-slimscroll repository, ensuring proper navigation for users. The fix was merged on August 25, 2017.",
            "de": "Dieser Pull Request hat den Link zur Demo-Seite im ngx-slimscroll-Repository korrigiert und sorgt so für eine reibungslose Navigation für die Nutzer. Der Fix wurde am 25. August 2017 integriert."
        },
        "languages": ["JavaScript"],
        "repoLink": "https://github.com/jkuri/ngx-slimscroll/pull/66"
    },
    {
        title: {
            en: 'Tobiga Showcase Website (this site)',
            de: 'Tobiga Showcase Website (diese Seite)',
        },
        description: {
            en: 'This website provides a platform to present a variety of software projects and contributions. Built with React, Chakra UI, and Tailwind CSS, the site features a responsive design and supports multiple languages.',
            de: 'Diese Website bietet eine Plattform zur Präsentation verschiedener Softwareprojekte und Beiträge. Entwickelt mit React, Chakra UI und Tailwind CSS, bietet die Seite ein responsives Design und unterstützt mehrere Sprachen.',
        },
        languages: ['React', 'Chakra UI', 'Tailwind CSS', 'Handlebars'],
        repoLink: 'https://github.com/tobias74/tobiga'
    },
    {
        "title": {
            "en": "Fork of FirebaseUI Web Without Fonts Import",
            "de": "Fork von FirebaseUI Web ohne Fonts-Import"
        },
        "description": {
            "en": "This fork of FirebaseUI Web removes the hard-coded loading of the Roboto font from Google Fonts. This is ideal for projects that want to host fonts locally or avoid external font requests. The original functionality of FirebaseUI Web is unchanged.",
            "de": "Dieser Fork von FirebaseUI Web entfernt das fest eingebundene Laden der Roboto-Schriftart von Google Fonts. Ideal für Projekte, die Schriftarten lokal hosten oder externe Anfragen vermeiden möchten. Die ursprüngliche Funktionalität von FirebaseUI Web bleibt unverändert."
        },
        "languages": ["JavaScript", "Firebase"],
        "repoLink": "https://github.com/tobias74/firebaseui-web"
    },
    {
        "title": {
            "en": "Export StravaPointsOptions Interface",
            "de": "Export der StravaPointsOptions-Schnittstelle"
        },
        "description": {
            "en": "This pull request adds the export of the `StravaPointsOptions` interface, enabling developers to utilize it in their TypeScript projects when working with the `gpx-builder` library. The enhancement was merged on November 19, 2024.",
            "de": "Dieser Pull-Request fügt den Export der `StravaPointsOptions`-Schnittstelle hinzu, sodass Entwickler sie in ihren TypeScript-Projekten bei der Arbeit mit der `gpx-builder`-Bibliothek verwenden können. Die Erweiterung wurde am 19. November 2024 integriert."
        },
        "languages": ["TypeScript"],
        "repoLink": "https://github.com/fabulator/gpx-builder/pull/227"
    }







];
