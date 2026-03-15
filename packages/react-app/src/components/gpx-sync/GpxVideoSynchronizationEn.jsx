import { Box, Text } from '@chakra-ui/react';

export const GpxVideoSynchronizationEn = () => {
    return (
        <Box maxWidth="800px" width="100%" my="40px" mx="auto" py={6} px={4} className="drumuri-article">
            <Text fontSize="xl" fontWeight="bold" mb={4}>
                Synchronize GPX Tracks with YouTube and Local Videos
            </Text>

            <p><strong><a href="https://drumuri.bike" target="_blank">drumuri.bike</a></strong> includes a GPX synchronization editor that allows users to align a GPX track with a video and turn both into an interactive route experience. Instead of being limited to prebuilt content, users can take almost any route recording and connect it to a matching video, making it possible to create highly individual virtual rides and runs.</p>

            <p>The workflow is flexible. A user can load a GPX track, open a YouTube video or a local video file, and then define synchronization points between the route and the video. Once enough anchor points have been set, the system interpolates the timing between them so that the video and the GPX track stay aligned throughout the route. This makes it possible to transform ordinary route recordings into structured virtual experiences.</p>

            <p>On <strong><a href="https://drumuri.bike" target="_blank">drumuri.bike</a></strong>, the synchronized result can be used directly as a workout. While the video plays, riders can follow the route with full workout functionality, including trainer data, simulation, progress displays, elevation views, and the rest of the platform’s riding environment. In other words, synchronization is not just an editing feature there &mdash; it becomes part of a complete indoor training workflow.</p>

            <p>The same synchronization technology is also available separately on <strong><a href="https://gpxsynchronizer.com/" target="_blank">gpxsynchronizer.com</a></strong>. That standalone product focuses specifically on the synchronization process itself. It allows users to create synchronized GPX/video data with simulation support, but without the full workout functionality of <strong><a href="https://drumuri.bike" target="_blank">drumuri.bike</a></strong>. This is useful for people who simply want to produce synchronized files for use in their own software or workflows.</p>

            <p>A major advantage of this approach is that it works with different kinds of video sources. Users can synchronize publicly accessible YouTube videos through the official player as well as local video files stored on their own machine. This makes the editor suitable both for personal route archives and for video material that is already published online.</p>

            <p>The overall goal is to make video-based route experiences more open and reusable. Instead of requiring specialized recording pipelines or closed ecosystems, the synchronization editor gives users a practical way to connect real-world GPX data with existing video footage. Whether the result is used immediately as a workout on <strong><a href="https://drumuri.bike" target="_blank">drumuri.bike</a></strong> or exported from <strong><a href="https://gpxsynchronizer.com/" target="_blank">gpxsynchronizer.com</a></strong> for other purposes, the feature opens up a wide range of possibilities for virtual cycling and running.</p>
        </Box>
    );
};
