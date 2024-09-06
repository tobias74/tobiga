import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Flex, Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import FooterSection from './components/FooterSection';
import Imprint from './components/Imprint';
import Privacy from './components/Privacy';
import Home from './components/Home';  // Import the Home component
import { LanguageProvider } from './context/LanguageContext';

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

            {/* Dynamic Language Paths */}
            <Route path="/:lang" element={<Home />} />
            <Route path="/:lang/imprint" element={<Imprint />} />
            <Route path="/:lang/privacy" element={<Privacy />} />
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
