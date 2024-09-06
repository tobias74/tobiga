import { Box, Text, Heading } from '@chakra-ui/react';
import { LanguageContext } from '../context/LanguageContext';
import { useContext } from 'react';
import PrivacyDe from './privacy/PrivacyDe';
import PrivacyEn from './privacy/PrivacyEn';

const Privacy = () => {

    const { currentLang } = useContext(LanguageContext);

    return (
        <Box maxWidth="800px" mx="auto" py={8} px={4}>
            {currentLang === 'de' ? <PrivacyDe /> : <PrivacyEn />}
        </Box>
    );
};

export default Privacy;
