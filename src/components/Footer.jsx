import { Box, Flex, Link, Text } from '@chakra-ui/react';

const Footer = () => (
    <Box as="footer" width="100vw" bg="teal.500" py={4} textAlign="center" color="white" mt={10}>
        <Flex justify="center" gap={4}>
            <Link href="https://github.com/yourprofile" isExternal>
                GitHub
            </Link>
            <Link href="https://linkedin.com/in/yourprofile" isExternal>
                LinkedIn
            </Link>
            <Link href="mailto:youremail@example.com">
                Email
            </Link>
        </Flex>
        <Text mt={4}>&copy; {new Date().getFullYear()} Tobiga. All rights reserved.</Text>
    </Box>
);

export default Footer;
