import { Box, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const VirtualCyclingInStreetView = () => {
    const { t } = useTranslation();

    return (
        <Box maxWidth="800px" width="100%" my="40px" mx="auto" py={6} px={4}>
            {/* Title */}
            <Text fontSize="xl" fontWeight="bold" mb={4}>
                Virtual Indoor Cycling in Street View
            </Text>


            {/* Rest of the Details */}
            <Text fontSize="md" lineHeight="tall">
                We have developed a website that enables users to virtually ride through street view using a smart trainer. On <a target="_blank" href="https://drumuri.bike">https://drumuri.bike</a> users can define a route they wish to ride by simply clicking on two points on the map. Smart trainer and heart rate monitor can be independently connected via Bluetooth.
            </Text>
        </Box>
    );
};

export default VirtualCyclingInStreetView;
