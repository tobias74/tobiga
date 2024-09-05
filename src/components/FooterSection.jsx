import { Flex, Link, Text, Box } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const FooterSection = () => (
    <Flex
        mt={4}
        direction="column"
        align="center"
        py={6}
        bg="gray.800"
        color="white"
        textAlign="center"
        width="100%"
    >
        {/* Links to Imprint and Privacy */}
        <Box mb={4}>
            <Flex gap={6}>
                <Link as={RouterLink} to="/imprint" color="teal.300">
                    Imprint
                </Link>
                <Link as={RouterLink} to="/privacy" color="teal.300">
                    Privacy
                </Link>
            </Flex>
        </Box>

        {/* Copyright */}
        <Text fontSize="sm" color="gray.400">
            &copy; {new Date().getFullYear()} Tobiga. All rights reserved.
        </Text>
    </Flex>
);

export default FooterSection;
