import {
    Box, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, Text, Menu, MenuButton, MenuItem, MenuList, Button
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const location = useLocation();
    const navigate = useNavigate();
    const { currentLang, changeLanguage } = useContext(LanguageContext);

    // Function to change the language but keep the current path
    const handleLanguageChange = (newLang) => {
        const currentPath = location.pathname.replace(`/${currentLang}`, `/${newLang}`);  // Replace the current language in the path with the new language
        changeLanguage(newLang);  // Update the context value (if necessary)
        navigate(currentPath);  // Navigate to the same path but in the new language
    };

    const handleScrollLink = (section) => {
        if (location.pathname !== `/${currentLang}`) {
            // If not on the home page, navigate to the home page with hash
            return (
                <RouterLink to={`/${currentLang}/#${section}`} onClick={onClose}>
                    <Text display="block" p={4} cursor="pointer">
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </Text>
                </RouterLink>
            );
        } else {
            // If already on the home page, scroll to the section
            return (
                <ScrollLink to={section} smooth={true} duration={500} onClick={onClose}>
                    <Text display="block" p={4} cursor="pointer">
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </Text>
                </ScrollLink>
            );
        }
    };

    return (
        <Box as="nav" position="fixed" top="0" right="0" zIndex="999" p={4}>
            <IconButton icon={<HamburgerIcon />} aria-label="Open Menu" size="lg" onClick={onOpen} variant="ghost" color="white" />

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

            {/* Language Selector */}
            <Menu>
                <MenuButton as={Button} ml={4} colorScheme="teal">
                    Language
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={() => handleLanguageChange('en')}>English</MenuItem>
                    <MenuItem onClick={() => handleLanguageChange('de')}>Deutsch</MenuItem>
                </MenuList>
            </Menu>
        </Box>
    );
};

export default Navbar;
