import { Box, Image, Text, Link, Stack } from '@chakra-ui/react';

const ProjectCard = ({ project }) => (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
        <Image src={project.image} alt={project.title} boxSize="200px" objectFit="cover" />

        <Stack mt={4}>
            <Text fontWeight="bold" fontSize="xl">{project.title}</Text>
            <Text>{project.description}</Text>
            <Link href={project.link} color="teal.500" isExternal>
                View Project
            </Link>
            <Stack direction="row">
                {project.tools.map((tool, idx) => (
                    <Text key={idx} fontSize="sm" bg="gray.200" p={1} borderRadius="md">
                        {tool}
                    </Text>
                ))}
            </Stack>
        </Stack>
    </Box>
);

export default ProjectCard;

