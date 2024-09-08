import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';

const LanguageUpdater = () => {
    const { lang } = useParams();  // Get language from URL params
    const { changeLanguage } = useContext(LanguageContext);  // Get function to update context

    useEffect(() => {
        if (lang) {
            changeLanguage(lang);  // Update the context with the language from the URL
        }
    }, [lang, changeLanguage]);

    return null;  // This component doesn't render anything
};

export default LanguageUpdater;
