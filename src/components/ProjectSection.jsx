const projects = [
    {
        title: 'drumuri.bike',
        description: 'An interactive web application that integrates Google Maps and Street View with smart trainers to provide immersive virtual cycling experiences on real-world routes.',
        tools: ['React', 'Firebase', 'Node.js', 'Three.js', 'Web Bluetooth'],
        link: 'https://drumuri.bike',
        image: '/images/drumuri-bike.png',
    },
    {
        title: 'RFID Chat',
        description: 'An experimental chat app that uses RFID tags as data storage, allowing users to write and store short messages directly on the tags. Messages can only be deleted with physical access to the tag, making it a unique and secure communication method.',
        tools: ['Kotlin', 'NFC', 'Android Jetpack'],
        link: 'https://play.google.com/store/apps/details?id=de.tobiga.rfidchat',
        image: '/images/rfid-chat.png',
    },
    {
        title: 'motionphoto.gallery',
        description: 'An online tool that extracts videos from motion photos captured on smartphones, allowing users to easily retrieve and use the video portion from their motion images.',
        tools: ['React Native', 'Redux', 'Firebase'],
        link: 'https://motionphoto.gallery',
        image: '/images/motionphoto-gallery.png',
    },
    {
        title: 'Text2Watts',
        description: "An app that enables home trainers without Bluetooth to transmit wattage data via Bluetooth by using the phone's camera and text recognition. It reads and relays wattage from the trainer’s display for integration with virtual cycling apps.",
        tools: ['Kotlin', 'ML Kit', 'Bluetooth BLE'],
        link: 'https://play.google.com/store/apps/details?id=de.tobiga.text2watts',
        image: '/images/text2watts.png',
    },
    {
        title: 'Travel Guru',
        description: 'An intelligent trip planner that helps you organize your travel itinerary, find the best deals on flights and hotels, and suggests activities based on your preferences.',
        tools: ['Next.js', 'GraphQL', 'MongoDB'],
        link: 'https://example.com/travel-guru',
        image: 'https://picsum.photos/200/200',
    }
];

import { SimpleGrid, Box, Heading, Text } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';
import { useTranslation } from 'react-i18next';

const ProjectSection = () => {
    const { t } = useTranslation();

    return (
        <Box id="projects" mt={12} >
            <Heading as="h2" size="lg" mb={6} textAlign="center">
                {t('projects')}
            </Heading>
            <SimpleGrid columns={[1, 2, 3]} spacing={10}>
                {/* Example project data */}
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default ProjectSection;
