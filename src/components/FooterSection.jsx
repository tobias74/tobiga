import { Flex, Link, Text, Box } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';  // Import LanguageContext

const FooterSection = () => {
    const { currentLang } = useContext(LanguageContext);  // Access the current language

    return (
        <Flex direction="column" align="center" py={6} bg="gray.800" color="white" textAlign="center" width="100%">
            <Box mb={4}>
                <Flex gap={6}>
                    <Link as={RouterLink} to={`/${currentLang}/imprint`} color="teal.300">
                        Imprint
                    </Link>
                    <Link as={RouterLink} to={`/${currentLang}/privacy`} color="teal.300">
                        Privacy
                    </Link>
                </Flex>
            </Box>

            <Text fontSize="sm" color="gray.400">
                &copy; {new Date().getFullYear()} Your Website Name. All rights reserved.
            </Text>
        </Flex>
    );
};

export default FooterSection;
