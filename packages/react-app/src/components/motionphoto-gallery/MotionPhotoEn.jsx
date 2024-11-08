import { Box, Text } from '@chakra-ui/react';

export const MotionPhotoEn = () => {
    return (
        <Box maxWidth="800px" width="100%" my="40px" mx="auto" py={6} px={4} className="motionphoto-article">
            {/* Title */}
            <Text fontSize="xl" fontWeight="bold" mb={4}>
                Extract Video Clips from Motion Photos
            </Text>

            <p><strong><a href="https://motionphoto.gallery" target="_blank">motionphoto.gallery</a></strong> is a tool designed to extract video clips embedded in motion photos, a type of image file often captured on smartphones. These files contain both a still photo and a short video clip, recording the moments right before the photo was taken – useful if the shot was slightly delayed.</p>

            <p>With <strong><a href="https://motionphoto.gallery" target="_blank">motionphoto.gallery</a></strong>, you can easily extract and save the video portion of your motion photos directly in your browser. The entire process happens locally on your computer, with no files uploaded.</p>

            <p>Since the extraction is handled within your browser, the process may use more of your computer's processing power, especially for larger or high-resolution motion photos, and could cause it to run hotter than usual.</p>

            <p><strong><a href="https://motionphoto.gallery" target="_blank">motionphoto.gallery</a></strong> offers a straightforward way to access the video clips in your photos.</p>
        </Box>
    );
};
