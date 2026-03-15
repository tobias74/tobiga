import { Box } from '@chakra-ui/react';
import { LanguageContext } from '../context/LanguageContext';
import { useContext } from 'react';
import './gpx-sync/page-styles.scss';
import { useTranslation } from 'react-i18next';
import { GpxVideoSynchronizationDe } from './gpx-sync/GpxVideoSynchronizationDe';
import { GpxVideoSynchronizationEn } from './gpx-sync/GpxVideoSynchronizationEn';
import { Helmet } from 'react-helmet-async';

const GpxVideoSynchronization = () => {

    const { currentLang } = useContext(LanguageContext);
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t('title-gpx-video-sync')}</title>
            </Helmet>

            <Box maxWidth="800px" mx="auto" py={6} px={4}>
                {currentLang === 'de'
                    ? <GpxVideoSynchronizationDe />
                    : <GpxVideoSynchronizationEn />}
            </Box>
        </>
    );
};

export default GpxVideoSynchronization;
