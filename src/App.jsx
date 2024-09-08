import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Flex, Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import FooterSection from './components/FooterSection';
import Imprint from './components/Imprint';
import Privacy from './components/Privacy';
import Home from './components/Home';  // Import the Home component
import { LanguageProvider } from './context/LanguageContext';
import LanguageUpdater from './components/LanguageUpdater';

function App() {
  return (
    <Router>
      <LanguageProvider>
        {/* Scroll to the correct hash when navigating */}
        <Flex direction="column" minHeight="100vh" minWidth="100vw" bg="gray.900" color="white">
          <Navbar />
          <Routes>
            {/* Redirect root to English */}
            <Route path="/" element={<Navigate to="/en" />} />

            {/* Wrap all language-based routes with a route that includes LanguageUpdater */}
            <Route
              path="/:lang/*"
              element={
                <>
                  <LanguageUpdater />  {/* Will update the language context */}
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="imprint" element={<Imprint />} />
                    <Route path="privacy" element={<Privacy />} />
                  </Routes>
                </>
              }
            />
          </Routes>
          {/* Footer stays at the bottom */}
          <Box id="legal" width="100%" mt="auto">
            <FooterSection />
          </Box>
        </Flex>
      </LanguageProvider>
    </Router>
  );
}

export default App;
