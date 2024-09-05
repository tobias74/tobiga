import { Box, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, Text } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const location = useLocation();

    // Function to handle scroll behavior based on the route
    const handleScrollLink = (section) => {
        if (location.pathname !== '/') {
            // If we're not on the home page, navigate back to home with a hash link
            return (
                <RouterLink to={`/#${section}`} onClick={onClose}>
                    <Text display="block" p={4} cursor="pointer">
                        {section.charAt(0).toUpperCase() + section.slice(1)} {/* Capitalize section name */}
                    </Text>
                </RouterLink>
            );
        } else {
            // If we're on the home page, just use smooth scrolling
            return (
                <ScrollLink to={section} smooth={true} duration={500} onClick={onClose}>
                    <Text display="block" p={4} cursor="pointer">
                        {section.charAt(0).toUpperCase() + section.slice(1)} {/* Capitalize section name */}
                    </Text>
                </ScrollLink>
            );
        }
    };

    return (
        <Box as="nav" position="fixed" top="0" right="0" zIndex="999" p={4}>
            {/* Burger Menu Icon */}
            <IconButton
                icon={<HamburgerIcon />}
                aria-label="Open Menu"
                size="lg"
                onClick={onOpen}
                variant="ghost"
                color="white"
            />

            {/* Drawer for Burger Menu */}
            <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>
                        {handleScrollLink('about')}
                        {handleScrollLink('projects')}
                        {handleScrollLink('contact')}
                        {handleScrollLink('legal')}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};

export default Navbar;
