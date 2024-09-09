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
        <Box >
            <Flex gap={6}>
                <Link href="https://github.com/tobias74" isExternal color="teal.300">
                    GitHub
                </Link>
                <Link href="https://www.linkedin.com/in/tobias-gassmann-01a99810/" isExternal color="teal.300">
                    LinkedIn
                </Link>
                <Link href="mailto:tobias@gaszmann.de" color="teal.300">
                    Email
                </Link>
            </Flex>
        </Box>

    </Flex>
);

export default ContactSection;
