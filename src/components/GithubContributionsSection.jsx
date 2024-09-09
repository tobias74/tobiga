// src/components/GithubContributionsSection.jsx
import { Box, Text, Link, Stack, VStack } from '@chakra-ui/react';

const contributions = [
    {
        title: 'OpenAI GPT-3 Documentation',
        description: 'Improved the clarity of GPT-3 documentation, added better examples for developers, and corrected minor errors.',
        repoLink: 'https://github.com/openai/gpt-3',
        languages: ['Markdown', 'JavaScript'],
    },
    {
        title: 'React Router',
        description: 'Contributed unit tests and resolved routing issues within the React Router core library.',
        repoLink: 'https://github.com/remix-run/react-router',
        languages: ['JavaScript', 'React'],
    },
    {
        title: 'Chakra UI',
        description: 'Enhanced Chakra UI’s documentation for custom themes and improved accessibility of components.',
        repoLink: 'https://github.com/chakra-ui/chakra-ui',
        languages: ['TypeScript', 'JavaScript'],
    },
    // Add more contributions here
];

const GithubContributionsSection = () => (
    <Box id="contributions" mt={12} maxWidth="800px" mx="auto" px={4}> {/* Limit maxWidth to 800px */}
        <VStack spacing={6} align="stretch">
            {contributions.map((contribution, index) => (
                <Box key={index} borderWidth="1px" borderRadius="lg" p={5} bg="gray.800" color="white">
                    <Text fontWeight="bold" fontSize="xl" mb={2}>{contribution.title}</Text>
                    <Text mb={2} lineHeight="1.6">{contribution.description}</Text>
                    <Stack direction="row" spacing={4} mb={2}>
                        {contribution.languages.map((lang, idx) => (
                            <Text key={idx} fontSize="sm" bg="gray.700" p={1} borderRadius="md">
                                {lang}
                            </Text>
                        ))}
                    </Stack>
                    <Link href={contribution.repoLink} color="teal.500" isExternal>
                        View Repository
                    </Link>
                </Box>
            ))}
        </VStack>
    </Box>
);
export default GithubContributionsSection;
