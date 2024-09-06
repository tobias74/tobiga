import { createContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Create a context for language management
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const { lang } = useParams();  // Get language from URL params
    const [currentLang, setCurrentLang] = useState('en');  // Default to English

    useEffect(() => {
        if (lang) {
            setCurrentLang(lang);  // Update context when lang changes in URL
        }
    }, [lang]);

    const changeLanguage = (newLang) => {
        setCurrentLang(newLang);
    };

    return (
        <LanguageContext.Provider value={{ currentLang, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
