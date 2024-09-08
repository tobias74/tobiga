import { Box, Text, Heading } from '@chakra-ui/react';
import { LanguageContext } from '../context/LanguageContext';
import { useContext, useEffect } from 'react';
import PrivacyDe from './privacy/PrivacyDe';
import PrivacyEn from './privacy/PrivacyEn';
import './privacy/Privacy.scss';

const Privacy = () => {

    const { currentLang } = useContext(LanguageContext);

    useEffect(() => {
        console.log("Current language is:", currentLang);  // Log to see the current language
    }, [currentLang]);

    return (
        <Box maxWidth="800px" mx="auto" py={8} px={4} className="privacy-container">
            {currentLang === 'de' ? <PrivacyDe /> : <PrivacyEn />}
        </Box>
    );
};

export default Privacy;
