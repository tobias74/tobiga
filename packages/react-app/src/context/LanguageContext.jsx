import { createContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Create a context for language management
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const { i18n } = useTranslation();  // Get the i18n instance to change the language
    const [currentLang, setCurrentLang] = useState();

    // Function to manually change the language
    const changeLanguage = (newLang) => {
        setCurrentLang(newLang);
        i18n.changeLanguage(newLang);  // Update i18n with the new language
    };

    // Sync the current language with i18n on initial render
    useEffect(() => {
        i18n.changeLanguage(currentLang);
    }, [currentLang, i18n]);

    return (
        <LanguageContext.Provider value={{ currentLang, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
