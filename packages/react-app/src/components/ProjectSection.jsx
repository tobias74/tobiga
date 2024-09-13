
import { SimpleGrid, Box, Heading, Text } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';
import { useTranslation } from 'react-i18next';
import { projects } from '../data/projects';

const ProjectSection = () => {
    const { t } = useTranslation();

    return (
        <Box mt={12}>
            <Text fontSize="2xl" fontWeight="bold" mb={6} textAlign="center">
                {t('projects')}
            </Text>
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
