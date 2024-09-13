import {
    Box, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, Text, Menu, MenuButton, MenuItem, MenuList
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { FaGlobe } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    console.log('Rendering Navbar');

    const { isOpen, onOpen, onClose } = useDisclosure();
    const location = useLocation();
    const navigate = useNavigate();
    const { currentLang, changeLanguage } = useContext(LanguageContext);
    const { t } = useTranslation();

    // Function to change the language but keep the current path
    const handleLanguageChange = (newLang) => {
        const currentPath = location.pathname.replace(`/${currentLang}`, `/${newLang}`);
        changeLanguage(newLang);
        navigate(currentPath);
    };

    const createAnchorLink = (section) => {
        return (
            <RouterLink to={`/${currentLang}/#${section}`} onClick={onClose}>
                <Text display="block" p={4} cursor="pointer">
                    {t(section)}
                </Text>
            </RouterLink>
        );
    };

    return (
        <Box
            as="nav"
            position="fixed"
            top="0"
            width="100%"
            zIndex="999"
            bg="gray.800"
            p={3}
            borderBottom="1px solid"
            borderColor="gray.700"
        >
            <Box
                maxWidth="1200px"  // Limit the width of the navbar content
                mx="auto"  // Center the navbar content horizontally
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                {/* Left Section: Language Menu */}
                <Menu>
                    <MenuButton
                        as={IconButton}
                        icon={<FaGlobe />}
                        aria-label="Change Language"
                        variant="ghost"
                        color="white"
                    />
                    <MenuList>
                        <MenuItem onClick={() => handleLanguageChange('en')}>English</MenuItem>
                        <MenuItem onClick={() => handleLanguageChange('de')}>Deutsch</MenuItem>
                    </MenuList>
                </Menu>

                {/* Center Section: Company Info */}
                <Box mb={0} textAlign="center">
                    <Text fontSize={{ base: "md", md: "lg" }} color="gray.400" letterSpacing="wide">
                        tobiga UG (haftungsbeschränkt)
                    </Text>
                    <Text fontSize={{ base: "md", md: "lg" }} fontWeight="medium" mt={1} color="gray.100">
                        Tobias Gassmann
                    </Text>
                </Box>

                {/* Right Section: Hamburger Menu */}
                <IconButton
                    icon={<HamburgerIcon />}
                    aria-label="Open Menu"
                    size="lg"
                    onClick={onOpen}
                    variant="ghost"
                    color="white"
                />

                {/* Drawer Menu */}
                <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerBody>
                            {createAnchorLink('about')}
                            {createAnchorLink('contact')}
                            {createAnchorLink('projects')}
                            {createAnchorLink('github-contributions')}
                            {createAnchorLink('publications')}

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
        </Box>
    );
};

export default Navbar;
