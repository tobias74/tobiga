export const projects = [
    {
        title: 'drumuri.bike',
        description: {
            en: 'A web application that integrates Google Maps and Street View with smart trainers to simulate virtual cycling on real-world routes.',
            de: 'Eine Webanwendung, die Google Maps und Street View mit Smart Trainern kombiniert, um virtuelle Radfahrten auf realen Routen zu simulieren.'
        },
        tools: ['React', 'Firebase', 'Node.js', 'Three.js', 'Web Bluetooth'],
        liveLink: 'https://drumuri.bike',
        image: '/images/drumuri-bike.png',
    },
    {
        title: 'RFID Chat',
        description: {
            en: 'An experimental app that stores and transmits short messages using RFID tags. Messages can only be deleted with physical access to the tag.',
            de: 'Eine experimentelle App, die Nachrichten auf RFID-Tags speichert und überträgt. Zum Löschen der Nachrichten ist physischer Zugriff auf das Tag nötig.'
        },
        tools: ['Kotlin', 'NFC', 'Android Jetpack'],
        liveLink: 'https://play.google.com/store/apps/details?id=de.tobiga.rfidchat',
        image: '/images/rfid-chat.png',
    },
    {
        title: 'Spatiotemporal (3D R-tree)',
        description: {
            en: 'A minimalistic Java-based Spring Boot application. It implements an R-tree index based on SQLite. The R-tree is used for efficient sorting by distance to a query point.',
            de: 'Eine minimalistische, Java-basierte Spring Boot-Anwendung. Es wird ein R-Baum-Index auf SQLite-Basis implementiert. Der R-Baum wird zur effizienten Sortierung nach Entfernung zu einem Abfragepunkt verwendet.'
        },
        tools: ['Java', 'Spring Boot', 'SQLite'],
        sourceLink: 'https://github.com/tobias74/spatiotemporal',
        image: '/images/3drtree.png'
    },
    {
        title: 'motionphoto.gallery',
        description: {
            en: 'A tool for extracting videos from motion photos taken on smartphones, allowing users to access and use the video portion.',
            de: 'Ein Tool, das Videos aus auf Smartphones aufgenommenen Bewegungfotos extrahiert und nutzbar macht.'
        },
        tools: ['Vue.js'],
        liveLink: 'https://motionphoto.gallery',
        sourceLink: 'https://github.com/tobias74/motion-photo-gallery',
        image: '/images/motionphoto-gallery.png',
    },
    {
        title: 'Text2Watts',
        description: {
            en: "An app that enables non-Bluetooth home trainers to transmit wattage data using the phone's camera and text recognition via Bluetooth.",
            de: 'Eine App, mit der Nutzer Wattzahlen von Heimtrainern ohne Bluetooth erfassen und mithilfe der Kamerafunktion und Texterkennung per Bluetooth übertragen können.'
        },
        tools: ['Kotlin', 'ML Kit', 'Bluetooth BLE'],
        liveLink: 'https://play.google.com/store/apps/details?id=de.tobiga.text2watts',
        image: '/images/text2watts.png',
    },
    {
        title: 'Leukemia Images',
        description: {
            en: 'A platform providing leukemia-related images and presentations to support research and education in hematology.',
            de: 'Eine Plattform mit Bildern und interaktiven Präsentationen zum Thema Leukämie.'
        },
        tools: ['React', 'Firebase', 'React MUI'],
        liveLink: 'https://leukemia-images.com/',
        image: '/images/leukemia-images.png',
    },
    {
        title: 'Proof of Existence Dapp',
        description: {
            en: 'A decentralized application that allows users to notarize files on the Ethereum blockchain by hashing them locally and storing the hash on-chain.',
            de: 'Eine dezentrale Anwendung, die es Nutzern ermöglicht, Dateien auf der Ethereum-Blockchain zu notarisieren, indem der Hash lokal berechnet und in der Blockchain gespeichert wird.'
        },
        tools: ['React', 'RainbowKit', 'Wagmi', 'Solidity'],
        liveLink: 'https://documented.me',
        sourceLink: 'https://github.com/tobias74/proof-of-existence',
        image: '/images/documented-me.png'
    },
    {
        title: 'Rechendreieck Math Game',
        description: {
            en: 'An interactive and responsive math game designed for children to solve calculation triangles with varying difficulty levels. Features include instant feedback, confetti effects, and customization options.',
            de: 'Ein interaktives und responsives Mathe-Spiel für Kinder, bei dem sogenannte Rechendreiecke mit verschiedenen Schwierigkeitsgraden gelöst werden müssen.'
        },
        tools: ['React', 'Vite', 'TailwindCSS', 'DaisyUI'],
        liveLink: 'https://rechendreiecke.de',
        sourceLink: 'https://github.com/tobias74/rechendreiecke',
        image: '/images/rechendreiecke.png'
    },
    {
        "title": "2 Goats 1 Car",
        "description": {
            "en": "An interactive tool to explore the Monty Hall problem. '2 Goats 1 Car' allows users to simulate various scenarios, adjust settings such as the number of doors, player strategy, and host knowledge, and observe the resulting probabilities.",
            "de": "Ein interaktives Werkzeug zur Erforschung des Monty-Hall-Problems. Nutzer können verschiedene Szenarien simulieren, Parameter wie die Anzahl der Türen, die Spielerstrategie und das Wissen des Moderators anpassen und die resultierenden Wahrscheinlichkeiten beobachten."
        },
        "tools": ["React", "Vite", "TailwindCSS", "Web Worker"],
        "liveLink": "https://2goats1car.com",
        "sourceLink": "https://github.com/tobias74/2goats1car",
        "image": "/images/2goats1car.png"
    }




];
