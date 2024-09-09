import {
    Box, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, Text, Menu, MenuButton, MenuItem, MenuList
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { FaGlobe } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const location = useLocation();
    const navigate = useNavigate();
    const { currentLang, changeLanguage } = useContext(LanguageContext);
    const { t, i18n } = useTranslation();

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
                        {t(section)}
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

            <Menu>
                <MenuButton
                    as={IconButton}
                    icon={<FaGlobe />}
                    aria-label="Change Language"
                    variant="ghost"
                    color="white"
                    ml={2}  // Optional: Add some margin to space it out
                />
                <MenuList>
                    <MenuItem onClick={() => handleLanguageChange('en')}>English</MenuItem>
                    <MenuItem onClick={() => handleLanguageChange('de')}>Deutsch</MenuItem>
                </MenuList>
            </Menu>

            <IconButton
                icon={<HamburgerIcon />}
                aria-label="Open Menu"
                size="lg"
                onClick={onOpen}
                variant="ghost"
                color="white"
            />

            <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>
                        {handleScrollLink('about')}
                        {handleScrollLink('contact')}
                        {handleScrollLink('projects')}
                        {handleScrollLink('github-contributions')}
                        {handleScrollLink('legal')}

                        <RouterLink to={`/${currentLang}/imprint`} onClick={onClose}>
                            <Text display="block" p={4} cursor="pointer">
                                {currentLang === 'en' ? 'Imprint' : 'Impressum'}
                            </Text>
                        </RouterLink>
                        <RouterLink to={`/${currentLang}/privacy`} onClick={onClose}>
                            <Text display="block" p={4} cursor="pointer">
                                {currentLang === 'en' ? 'Privacy Policy' : 'Datenschutz'}
                            </Text>
                        </RouterLink>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>

        </Box>
    );
};

export default Navbar;
