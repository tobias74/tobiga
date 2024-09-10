import { Box, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const Imprint = () => {
    const { t } = useTranslation();

    return (
        <Box maxWidth="800px" width="100%" my="40px" mx="auto" py={6} px={4}>
            {/* Title */}
            <Text fontSize="xl" fontWeight="bold" mb={4}>
                {t('imprint-title')} {/* Imprint or Impressum */}
            </Text>

            {/* Company Name */}
            <Text fontSize="lg" fontWeight="semibold" mb={3}>
                tobiga UG (haftungsbeschränkt)
            </Text>

            {/* Rest of the Details */}
            <Text fontSize="md" lineHeight="tall">
                Tobias Gassmann
                <br />
                Bodenseestr. 4a
                <br />
                81241 München
                <br />
                HRB 219431
                <br />
                USt-IdNr.: DE 301206623
            </Text>
        </Box>
    );
};

export default Imprint;
