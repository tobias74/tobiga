import { Box, Image, Text, Link, Stack, useColorModeValue, Wrap, WrapItem, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const ProjectCard = ({ project }) => {
    // Use Chakra's color mode-aware values to adjust colors for both light and dark themes
    const tagBg = useColorModeValue('gray.100', 'gray.700');
    const tagText = useColorModeValue('gray.800', 'gray.200');

    // Get current language from i18next
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;  // Current language (e.g., 'en' or 'de')

    // Determine the link for the image: liveLink takes precedence over sourceLink
    const imageLink = project.liveLink || project.sourceLink;

    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
            {/* Adjusted Image for arbitrary dimensions */}
            <Box height="200px" overflow="hidden">
                <Link href={imageLink} isExternal>
                    <Image
                        src={project.image}
                        alt={project.title}
                        objectFit="cover"
                        width="100%"
                        height="100%"
                    />
                </Link>
            </Box>

            <Stack mt={4}>
                <Text fontWeight="bold" fontSize="xl">{project.title}</Text>
                <Text>
                    {/* Use the correct description based on the current language */}
                    {project.description[currentLang] || project.description['en']}
                </Text>

                {/* Render liveLink and sourceLink on the same line */}
                <Flex gap={4} mt={2}>
                    {project.liveLink && (
                        <Link href={project.liveLink} color="teal.500" isExternal>
                            {t('view-project')}
                        </Link>
                    )}
                    {project.sourceLink && (
                        <Link href={project.sourceLink} color="teal.500" isExternal>
                            {t('view-source')}
                        </Link>
                    )}
                </Flex>

                <Wrap spacing={2} mt={2}>
                    {project.tools.map((tool, idx) => (
                        <WrapItem key={idx}>
                            <Text
                                fontSize="sm"
                                bg={tagBg}
                                color={tagText}
                                p={1}
                                borderRadius="md"
                            >
                                {tool}
                            </Text>
                        </WrapItem>
                    ))}
                </Wrap>
            </Stack>
        </Box>
    );
};

export default ProjectCard;
