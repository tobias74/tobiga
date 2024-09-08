import { createContext, useState } from 'react';

// Create a context for language management
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [currentLang, setCurrentLang] = useState('en');  // Default to English

    // Function to manually change the language
    const changeLanguage = (newLang) => {
        setCurrentLang(newLang);
    };

    return (
        <LanguageContext.Provider value={{ currentLang, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
