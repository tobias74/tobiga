import { Box, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, Text } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box as="nav" position="fixed" top="0" right="0" zIndex="999" p={4} pr={6}>
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
                        <ScrollLink to="about" smooth={true} duration={500} onClick={onClose}>
                            <Text display="block" p={4} cursor="pointer">
                                About Me
                            </Text>
                        </ScrollLink>
                        <ScrollLink to="projects" smooth={true} duration={500} onClick={onClose}>
                            <Text display="block" p={4} cursor="pointer">
                                Projects
                            </Text>
                        </ScrollLink>
                        <ScrollLink to="contact" smooth={true} duration={500} onClick={onClose}>
                            <Text display="block" p={4} cursor="pointer">
                                Contact
                            </Text>
                        </ScrollLink>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};

export default Navbar;
