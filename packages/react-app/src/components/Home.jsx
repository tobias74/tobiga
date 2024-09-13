import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box, Heading, Text, Flex } from '@chakra-ui/react';
import ProjectSection from '../components/ProjectSection';
import ContactSection from '../components/ContactSection';
import GithubContributionsSection from './GithubContributionsSection';
import { Divider } from '@chakra-ui/react'; // Import Divider
import { PublicationsSection } from './PublicationsSection';
import ScrollToHashElement from './ScrollToHashElement';


const Home = () => {
    const { lang } = useParams();  // Get the current language from the URL
    const { t } = useTranslation();  // Use translation hook


    return (
        <Box id="about">
            {/* About Section */}
            <Flex direction="column" align="center" maxWidth="1200px" mx="auto" px={4} mt={12}>
                <Box mb={0} >
                    <Text fontSize="lg" textAlign="center" color="gray.400" letterSpacing="wide">
                        tobiga UG (haftungsbeschränkt)  {/* Refined and spaced out */}
                    </Text>
                    <Text fontSize="lg" fontWeight="medium" textAlign="center" mt={2} color="gray.100">
                        Tobias Gassmann  {/* Softer and more subtle */}
                    </Text>
                </Box>

                {/* Contact Section */}
                <Box id="contact" py={1}>
                    <ContactSection />
                </Box>

                {/* Project Section */}
                <Box mt={2} id="projects" py={1} >
                    <ProjectSection />
                </Box>

                <Box mt={24} id="github-contributions" py={1} >
                    <GithubContributionsSection />
                </Box>

                <Box mt={22} id="publications" py={1} >
                    <PublicationsSection />
                </Box>

                <Box mb={10}></Box>

            </Flex>
            <ScrollToHashElement />
        </Box>
    );
};

export default Home;
