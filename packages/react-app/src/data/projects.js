export const projects = [
    {
        title: 'drumuri.bike',
        description: {
            en: 'A web application that integrates Google Maps and Street View with smart trainers to simulate virtual cycling on real-world routes.',
            de: 'Eine Webanwendung, die Google Maps und Street View mit Smart Trainern kombiniert, um virtuelle Radfahrten auf realen Routen zu simulieren.'
        },
        tools: ['React', 'Firebase', 'Node.js', 'Three.js', 'Web Bluetooth'],
        link: 'https://drumuri.bike',
        image: '/images/drumuri-bike.png',
    },
    {
        title: 'RFID Chat',
        description: {
            en: 'An experimental app that stores and transmits short messages using RFID tags. Messages can only be deleted with physical access to the tag.',
            de: 'Eine experimentelle App, die Nachrichten auf RFID-Tags speichert und überträgt. Zum Löschen der Nachrichten ist physischer Zugriff auf das Tag nötig.'
        },
        tools: ['Kotlin', 'NFC', 'Android Jetpack'],
        link: 'https://play.google.com/store/apps/details?id=de.tobiga.rfidchat',
        image: '/images/rfid-chat.png',
    },
    {
        title: 'motionphoto.gallery',
        description: {
            en: 'A tool for extracting videos from motion photos taken on smartphones, allowing users to access and use the video portion.',
            de: 'Ein Tool, das Videos aus auf Smartphones aufgenommenen Bewegungfotos extrahiert und nutzbar macht.'
        },
        tools: ['Vue.js'],
        link: 'https://motionphoto.gallery',
        image: '/images/motionphoto-gallery.png',
    },
    {
        title: 'Text2Watts',
        description: {
            en: "An app that enables non-Bluetooth home trainers to transmit wattage data using the phone's camera and text recognition via Bluetooth.",
            de: 'Eine App, mit der Nutzer Wattzahlen von Heimtrainern ohne Bluetooth erfassen und mithilfe der Kamerafunktion und Texterkennung per Bluetooth übertragen können.'
        },
        tools: ['Kotlin', 'ML Kit', 'Bluetooth BLE'],
        link: 'https://play.google.com/store/apps/details?id=de.tobiga.text2watts',
        image: '/images/text2watts.png',
    },
    {
        title: 'Leukemia Images',
        description: {
            en: 'A platform providing leukemia-related images and presentations to support research and education in hematology.',
            de: 'Eine Plattform mit Bildern und interaktiven Präsentationen zum Thema Leukämie.'
        },
        tools: ['React', 'Firebase', 'React MUI'],
        link: 'https://leukemia-images.com/',
        image: '/images/leukemia-images.png',
    },
    {
        title: 'Spatiotemporal (3D R-tree)',
        description: {
            en: 'A minimalistic Java-based Spring Boot application. It implements an R-tree index based on SQLite. The R-tree is used for efficient sorting by distance to a query point.',
            de: 'Eine minimalistische, Java-basierte Spring Boot-Anwendung. Es wird ein R-Baum-Index auf SQLite-Basis implementiert. Der R-Baum wird zur effizienten Sortierung nach Entfernung zu einem Abfragepunkt verwendet.'
        },
        tools: ['Java', 'Spring Boot', 'SQLite'],
        link: 'https://github.com/tobias74/spatiotemporal',
        image: '/images/3drtree.png'
    }

];
