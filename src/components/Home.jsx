import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box, Heading, Text, Flex } from '@chakra-ui/react';
import ProjectSection from '../components/ProjectSection';
import ContactSection from '../components/ContactSection';

function ScrollToHashElement() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1)); // Remove the `#` symbol
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return null;
}

const Home = () => {
    const { lang } = useParams();  // Get the current language from the URL
    const { i18n, t } = useTranslation();  // Use translation hook

    // Change language based on URL param
    useEffect(() => {
        if (lang) {
            i18n.changeLanguage(lang);
        }
    }, [lang, i18n]);

    return (
        <Box>
            {/* About Section */}
            <Flex direction="column" align="center" maxWidth="1200px" mx="auto" px={4} mt={12}>
                <Box mb={6}>
                    <Text fontSize="lg" textAlign="center">
                        {t('about')}  {/* Use translation for about text */}
                    </Text>
                </Box>

                {/* Project Section */}
                <ProjectSection />

                {/* Contact Section */}
                <Box id="contact" py={12}>
                    <ContactSection />
                </Box>
            </Flex>
            <ScrollToHashElement />
        </Box>
    );
};

export default Home;
