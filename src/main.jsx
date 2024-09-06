import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import App from './App.jsx';
import './index.css';

// Configure i18next
i18n
  .use(LanguageDetector)  // Automatically detect the user's language
  .use(HttpApi)           // Load translations from backend
  .init({
    supportedLngs: ['en', 'de'],  // Supported languages
    fallbackLng: 'en',            // Fallback language
    detection: {
      order: ['path', 'navigator'],  // Detect language via path or browser
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',  // Path to translation files
    }
  });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </I18nextProvider>
  </StrictMode>
);
