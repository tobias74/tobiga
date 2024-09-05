import { Flex, Link, Text, Box } from '@chakra-ui/react';

const ContactSection = () => (
    <Flex
        direction="column"
        align="center"
        py={12}

        color="white"
        textAlign="center"
    >
        {/* Contact Links */}
        <Box mb={6}>
            <Text fontSize="2xl" mb={4}>
                Get in Touch
            </Text>
            <Flex gap={6}>
                <Link href="https://github.com/yourprofile" isExternal color="teal.300">
                    GitHub
                </Link>
                <Link href="https://linkedin.com/in/yourprofile" isExternal color="teal.300">
                    LinkedIn
                </Link>
                <Link href="mailto:youremail@example.com" color="teal.300">
                    Email
                </Link>
            </Flex>
        </Box>

        {/* Copyright text, smaller and subtle */}
        <Text fontSize="sm" color="gray.400">
            &copy; {new Date().getFullYear()} Tobiga. All rights reserved.
        </Text>
    </Flex>
);

export default ContactSection;
