import { Box, Text, Link, Stack, VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { GithubContributions } from '../data/github-contributions';

const GithubContributionsSection = () => {
    const { i18n } = useTranslation(); // Get the current language

    return (
        <Box id="contributions" mt={12} maxWidth="800px" mx="auto" px={4}> {/* Limit maxWidth to 800px */}
            <VStack spacing={6} align="stretch">
                {GithubContributions.map((contribution, index) => (
                    <Box key={index} borderWidth="1px" borderRadius="lg" p={5} bg="gray.800" color="white">
                        <Text fontWeight="bold" fontSize="xl" mb={2}>
                            {contribution.title[i18n.language] || contribution.title['en']} {/* Use translated title */}
                        </Text>
                        <Text mb={2} lineHeight="1.6">
                            {contribution.description[i18n.language] || contribution.description['en']} {/* Use translated description */}
                        </Text>
                        <Stack direction="row" spacing={4} mb={2}>
                            {contribution.languages.map((lang, idx) => (
                                <Text key={idx} fontSize="sm" bg="gray.700" p={1} borderRadius="md">
                                    {lang}
                                </Text>
                            ))}
                        </Stack>
                        <Link href={contribution.repoLink} color="teal.500" isExternal>
                            {contribution.repoLink}
                        </Link>
                    </Box>
                ))}
            </VStack>
        </Box>
    );
};

export default GithubContributionsSection;
