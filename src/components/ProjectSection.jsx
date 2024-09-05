import { SimpleGrid, Box } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';

const projects = [
    {
        title: 'CodeChef Companion',
        description: 'A browser extension that provides real-time coding challenges from CodeChef and tracks your progress on the leaderboard. Perfect for competitive programming enthusiasts.',
        tools: ['JavaScript', 'Browser APIs', 'React'],
        link: 'https://example.com/codechef-companion',
        image: 'https://picsum.photos/200/200',
    },
    {
        title: 'Mindful Meditation',
        description: 'A meditation and mindfulness app designed to reduce stress and help users track their daily meditation habits. Includes a built-in journal and mood tracker.',
        tools: ['React Native', 'Redux', 'Firebase'],
        link: 'https://example.com/mindful-meditation',
        image: 'https://picsum.photos/200/200',
    },
    {
        title: 'CryptoTracker Pro',
        description: 'An advanced cryptocurrency dashboard that provides real-time updates, charts, and price alerts. Customize your watchlist and set price alerts for your favorite coins.',
        tools: ['Node.js', 'Express', 'WebSockets'],
        link: 'https://example.com/cryptotracker-pro',
        image: 'https://picsum.photos/200/200',
    },
    {
        title: 'Artify - AI Art Generator',
        description: 'Generate beautiful artwork using AI and deep learning models. Upload your photos and turn them into art pieces that look like they were painted by Van Gogh or Picasso.',
        tools: ['Python', 'TensorFlow', 'React'],
        link: 'https://example.com/artify-ai',
        image: 'https://picsum.photos/200/200',
    },
    {
        title: 'Travel Guru',
        description: 'An intelligent trip planner that helps you organize your travel itinerary, find the best deals on flights and hotels, and suggests activities based on your preferences.',
        tools: ['Next.js', 'GraphQL', 'MongoDB'],
        link: 'https://example.com/travel-guru',
        image: 'https://picsum.photos/200/200',
    }
];

const ProjectSection = () => (
    <Box id="projects" mt={12}>
        <SimpleGrid columns={[1, 2, 3]} spacing={10}>
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </SimpleGrid>
    </Box>
);

export default ProjectSection;
