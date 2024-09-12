import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import FooterSection from './components/FooterSection';
import Imprint from './components/Imprint';
import Privacy from './components/Privacy';
import Home from './components/Home';
import VirtualCyclingInStreetView from './components/VirtualCyclingInStreetView';
import { LanguageProvider } from './context/LanguageContext';
import LanguageUpdater from './components/LanguageUpdater';

const VALID_LANGUAGES = ['en', 'de', 'static'];  // Add supported languages here

// Component to handle the redirect if locale is missing
const LocaleRedirect = ({ children }) => {
  const location = useLocation();

  // Extract the first part of the path
  const pathParts = location.pathname.split('/').filter(Boolean); // Remove empty segments
  const firstPart = pathParts[0]; // This will be the locale if present

  // Check if the first part is a valid locale
  if (!VALID_LANGUAGES.includes(firstPart)) {
    // Analyze the current domain
    const domain = window.location.hostname;

    let defaultLocale = 'en'; // Default to English if no domain-specific locale is found

    // Check domain ending
    if (domain.endsWith('.de')) {
      defaultLocale = 'de'; // Set to German if domain ends with .de
    } else if (domain.endsWith('.com')) {
      defaultLocale = 'en'; // Set to English if domain ends with .com
    }

    // Redirect to the same path but with the appropriate locale prepended
    return <Navigate to={`/${defaultLocale}${location.pathname}`} replace />;
  }

  // If the locale is valid, render the children (the actual routes)
  return children;
};

function App() {
  return (
    <Router>
      <LanguageProvider>
        <Flex direction="column" minHeight="100vh" bg="gray.900" color="white">
          <Navbar />

          <Routes>
            {/* If no language is specified, redirect to default locale (e.g., /en/) */}
            <Route
              path="/*"
              element={
                <LocaleRedirect>
                  <Routes>
                    {/* Wrap all language-based routes */}
                    <Route
                      path="/:lang/*"
                      element={
                        <>
                          <LanguageUpdater />  {/* Will update the language context */}
                          <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="imprint" element={<Imprint />} />
                            <Route path="privacy" element={<Privacy />} />
                            <Route path="virtual-cycling-in-street-view" element={<VirtualCyclingInStreetView />} />
                          </Routes>
                        </>
                      }
                    />
                  </Routes>
                </LocaleRedirect>
              }
            />
          </Routes>

          <Box id="legal" width="100%" mt="auto">
            <FooterSection />
          </Box>
        </Flex>
      </LanguageProvider>
    </Router>
  );
}

export default App;
