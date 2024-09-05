import { Box, Text, Heading } from '@chakra-ui/react';

const Imprint = () => {
    return (
        <Box maxWidth="800px" mx="auto" py={8} px={4}>
            <Heading as="h1" size="xl" mb={6}>Imprint</Heading>
            <Text fontSize="lg">
                This is the imprint page. You can add legal information about the site owner, contact details, and more here.
            </Text>
        </Box>
    );
};

export default Imprint;
