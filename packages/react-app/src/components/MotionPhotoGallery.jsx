import { Box, Text } from '@chakra-ui/react';
import { LanguageContext } from '../context/LanguageContext';
import { useContext, useEffect } from 'react';
import './motionphoto-gallery/page-styles.scss';
import { useTranslation } from 'react-i18next';
import { MotionPhotoDe } from './motionphoto-gallery/MotionPhotoDe';
import { MotionPhotoEn } from './motionphoto-gallery/MotionPhotoEn';
import { Helmet } from 'react-helmet-async';

const MotionPhotoGallery = () => {

    const { currentLang } = useContext(LanguageContext);
    const { t } = useTranslation();

    useEffect(() => {
        console.log("Current language is:", currentLang);  // Log to see the current language
    }, [currentLang]);

    return (
        <>
            <Helmet>
                <title>{t('title-motionphoto-gallery')}</title>
                <meta
                    name="description"
                    content={t('description-motionphoto-gallery')}
                />
            </Helmet>
            <Box maxWidth="800px" mx="auto" py={6} px={4}>
                {currentLang === 'de' ? <MotionPhotoDe /> : <MotionPhotoEn />}
            </Box>
        </>
    );
};

export default MotionPhotoGallery;
