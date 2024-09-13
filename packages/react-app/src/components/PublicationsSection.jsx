// src/components/PublicationsSection.jsx
import { Box, Text, Link, VStack, Stack, Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';  // Import the useTranslation hook
import { publications } from '../data/publications';

export const PublicationsSection = () => {
    const { i18n, t } = useTranslation();  // Get the current language from i18n

    return (
        <Box mt={12} maxWidth="800px" width="100%" mx="auto" px={4}>
            <Text fontSize="2xl" fontWeight="bold" mb={6} textAlign="center">
                {t('my-publications')}
            </Text>
            <VStack spacing={8} align="stretch">
                {publications.map((publication, index) => (
                    <Box key={index} borderWidth="1px" borderRadius="lg" p={5} bg="gray.700" color="white">
                        {/* Title with language support */}
                        <Text fontWeight="bold" fontSize="xl" mb={2}>
                            {publication.title[i18n.language] || publication.title['en']}
                        </Text>

                        {/* Platform with language support */}
                        <Text fontSize="sm" color="gray.400" mb={2}>
                            {publication.platform[i18n.language] || publication.platform['en']}
                        </Text>

                        {/* Description with language support */}
                        <Text mb={4} lineHeight="1.6">
                            {publication.description[i18n.language] || publication.description['en']}
                        </Text>

                        {/* Link */}
                        <Stack direction="row" justifyContent="flex-start">
                            <Link href={publication.link} isExternal>
                                <Button colorScheme="teal" size="sm">Read Article</Button>
                            </Link>
                        </Stack>
                    </Box>
                ))}
            </VStack>
        </Box>
    );
};
