import { Box, Text, Heading } from '@chakra-ui/react';

const Privacy = () => {
    return (
        <Box maxWidth="800px" mx="auto" py={8} px={4}>
            <Heading as="h1" size="xl" mb={6}>Privacy Policy</Heading>
            <Text fontSize="lg">
                This is the privacy policy page. You can include information about how user data is handled here.
            </Text>
        </Box>
    );
};

export default Privacy;
