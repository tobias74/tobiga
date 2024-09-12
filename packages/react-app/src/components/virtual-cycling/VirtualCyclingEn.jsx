import { Box, Text, Heading } from '@chakra-ui/react';

export const VirtualCyclingEn = () => {
    return (
        <Box maxWidth="800px" width="100%" my="40px" mx="auto" py={6} px={4} className="drumuri-article">
            {/* Title */}
            <Text fontSize="xl" fontWeight="bold" mb={4}>
                Virtual Indoor Cycling in Street View
            </Text>



            <p><strong>drumuri.bike</strong> allows cyclists to create their own virtual rides by selecting and customizing routes through a detailed map interface. Using a combination of 3D tiles, aerial satellite imagery, and elevation data, the platform renders a range of landscapes for riders to explore. With the addition of Google Street View, users can switch between a map-based view and a more ground-level experience, adding another layer of detail to their rides.</p>

            <p>Route creation is straightforward: users choose two points on the map to set a start and finish, then refine the path by dragging via points to adjust the journey to their liking. This flexibility makes it easy to tailor a ride to personal preferences, whether exploring a familiar area or testing out a new route.</p>

            <p>In addition to real-time riding, <strong>drumuri.bike</strong> offers a simulation mode where users can control the speed of the ride or skip through different sections using a slider. For those looking to track their progress, the platform also supports GPX files, enabling riders to load previous workout data and challenge their past performances by displaying "ghost riders" on both the map and the 3D environment.</p>

            <p>The focus of <strong>drumuri.bike</strong> is on giving users control over where and how they ride, offering an open-ended approach to virtual cycling. With its map-based customization and integration of Street View, it provides a versatile tool for those who enjoy setting their own routes and exploring a wide variety of locations from home.</p>


        </Box>
    );
};