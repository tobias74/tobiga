import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';
import Imprint from './components/Imprint';
import Privacy from './components/Privacy';
import FooterSection from './components/FooterSection';  // Footer Section

function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1)); // Remove the `#` symbol
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToHashElement />

      {/* Ensure that the layout takes the full height of the viewport */}
      <Flex direction="column" minHeight="100vh" minWidth="100vw" bg="gray.900" color="white">
        <Navbar />

        <Routes>
          {/* Main Route */}
          <Route
            path="/"
            element={
              <Box flex="1" mt="100px">
                <Flex direction="column" align="center" maxWidth="1200px" mx="auto" px={4}>
                  {/* About Me Section */}
                  <Box mb={2}>
                    <Text fontSize="lg" textAlign="center">
                      I’m a software developer passionate about creating clean and scalable applications.
                      I specialize in React and front-end development, constantly striving to learn new technologies
                      and improve my skills.
                    </Text>
                  </Box>

                  {/* Contact Section */}
                  <Box id="contact" py={1}>
                    <ContactSection />
                  </Box>

                  {/* Projects Section */}
                  <Heading as="h1" size="2xl" mb={2}>
                    My Projects
                  </Heading>
                  <ProjectSection />
                </Flex>
              </Box>
            }
          />

          {/* Imprint Route */}
          <Route path="/imprint" element={<Imprint />} />

          {/* Privacy Route */}
          <Route path="/privacy" element={<Privacy />} />
        </Routes>

        {/* Sticky Footer Section */}
        <Box id="legal" width="100%" mt="auto">
          <FooterSection />
        </Box>
      </Flex>
    </Router>
  );
}

export default App;
