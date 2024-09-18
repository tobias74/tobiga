import { Box, Text, Heading } from '@chakra-ui/react';
import { LanguageContext } from '../context/LanguageContext';
import { useContext, useEffect } from 'react';
import './virtual-cycling/page-styles.scss';
import { useTranslation } from 'react-i18next';
import { VirtualCyclingDe } from './virtual-cycling/VirtualCyclingDe';
import { VirtualCyclingEn } from './virtual-cycling/VirtualCyclingEn';
import { Helmet } from 'react-helmet-async';

const VirtualCyclingInStreetView = () => {

    const { currentLang } = useContext(LanguageContext);

    const { t } = useTranslation();

    useEffect(() => {
        console.log("Current language is:", currentLang);  // Log to see the current language
    }, [currentLang]);

    return (
        <>
            <Helmet>
                <title>{t('title-drumuri-bike')}</title>
            </Helmet>
            <Box maxWidth="800px" mx="auto" py={6} px={4}>
                {currentLang === 'de' ? <VirtualCyclingDe /> : <VirtualCyclingEn />}
            </Box>
        </>
    );
};

export default VirtualCyclingInStreetView;
