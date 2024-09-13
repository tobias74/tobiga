import { Box, Text, Heading } from '@chakra-ui/react';
import { LanguageContext } from '../context/LanguageContext';
import { useContext, useEffect } from 'react';
import PrivacyDe from './privacy/PrivacyDe';
import PrivacyEn from './privacy/PrivacyEn';
import './privacy/Privacy.scss';
import { useTranslation } from 'react-i18next';

const Privacy = () => {

    const { currentLang } = useContext(LanguageContext);

    const { t } = useTranslation();

    useEffect(() => {
        console.log("Current language is:", currentLang);  // Log to see the current language
    }, [currentLang]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'auto', // Instant jump (default behavior)
        });
    }, []);

    return (
        <Box maxWidth="800px" mx="auto" py={6} px={4} className="privacy-container">
            <Text fontSize="xl" fontWeight="bold" mb={4}>
                {t('privacy-title')} {/* Imprint or Impressum */}
            </Text>

            {currentLang === 'de' ? <PrivacyDe /> : <PrivacyEn />}
        </Box>
    );
};

export default Privacy;
