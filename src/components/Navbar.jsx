import { Box, Flex, Text } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => (
    <Box as="nav" position="fixed" top="0" width="100%" bg="teal.500" zIndex="999">
        <Flex justify="center" p={4}>
            <ScrollLink to="projects" smooth={true} duration={500}>
                <Text p={4} color="white" cursor="pointer">Projects</Text>
            </ScrollLink>
            {/* Add Dark Mode Toggle */}
            <DarkModeToggle />
        </Flex>
    </Box>
);

export default Navbar;
