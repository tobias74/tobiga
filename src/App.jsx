import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <Flex direction="column" minHeight="100vh" minWidth="100vw" bg="gray.900" color="white">
      {/* Navbar for scroll-based navigation */}
      <Navbar />

      {/* Main content area */}
      <Box flex="1" mt="100px">
        {/* Centered Content with maxWidth and spacing */}
        <Flex direction="column" align="center" maxWidth="1200px" mx="auto" px={4}>
          {/* About Me Section */}
          <Box id="about" mb={10}>
            <Text fontSize="lg" textAlign="center">
              I’m a software developer passionate about creating clean and scalable applications.
              I specialize in React and front-end development, constantly striving to learn new technologies
              and improve my skills.
            </Text>
          </Box>

          {/* Section for displaying projects */}
          <Heading as="h1" size="2xl" mb={8}>
            My Projects
          </Heading>

          <ProjectSection />
        </Flex>
      </Box>

      {/* Contact Section */}
      <Box id="contact" py={8} >
        <ContactSection />
      </Box>

    </Flex>
  );
}

export default App;
