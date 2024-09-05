import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';
import Imprint from './components/Imprint';  // Create this component
import Privacy from './components/Privacy';  // Create this component

function App() {
  return (
    <Router>
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
                  <Box mb={10}>
                    <Text fontSize="lg" textAlign="center">
                      I’m a software developer passionate about creating clean and scalable applications.
                      I specialize in React and front-end development, constantly striving to learn new technologies
                      and improve my skills.
                    </Text>
                  </Box>

                  {/* Projects Section */}
                  <Heading as="h1" size="2xl" mb={8}>
                    My Projects
                  </Heading>
                  <ProjectSection />
                </Flex>
                <Box id="contact" py={8} >
                  <ContactSection />
                </Box>
              </Box>
            }
          />

          {/* Imprint Route */}
          <Route path="/imprint" element={<Imprint />} />

          {/* Privacy Route */}
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Flex>
    </Router>
  );
}

export default App;
