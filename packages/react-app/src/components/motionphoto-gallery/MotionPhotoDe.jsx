import { Box, Text } from '@chakra-ui/react';

export const MotionPhotoDe = () => {
    return (
        <Box maxWidth="800px" width="100%" my="40px" mx="auto" py={6} px={4} className="motionphoto-article">
            {/* Title */}
            <Text fontSize="xl" fontWeight="bold" mb={4}>
                Videoclips aus Motion Fotos extrahieren
            </Text>

            <p><strong><a href="https://motionphoto.gallery" target="_blank">motionphoto.gallery</a></strong> ist ein praktisches Werkzeug, um Videoclips aus Motion Fotos herauszulösen. Diese speziellen Fotos, die oft mit Smartphones aufgenommen werden, enthalten neben dem Standbild einen kurzen Videoclip. Motion Fotos erfassen auch die Zeit unmittelbar vor dem eigentlichen Foto – so lässt sich ein verpasster Moment einfangen, selbst wenn der Auslöser etwas zu spät gedrückt wurde.</p>

            <p>Mit <strong><a href="https://motionphoto.gallery" target="_blank">motionphoto.gallery</a></strong> können Sie die Videoanteile Ihrer Motion Fotos direkt im Browser extrahieren und speichern. Die Verarbeitung erfolgt vollständig auf Ihrem Computer – es werden keine Dateien hochgeladen.</p>

            <p>Da die Extraktion direkt im Browser erfolgt, kann die Verarbeitung aufwändig sein. Ihr Computer könnte dabei mehr Energie verbrauchen und sich besonders bei großen Dateien oder hochauflösenden Motion Fotos erwärmen.</p>

            <p><strong><a href="https://motionphoto.gallery" target="_blank">motionphoto.gallery</a></strong> macht es einfach, auf die eingebetteten Videoclips in Ihren Fotos zuzugreifen und sie für die spätere Ansicht oder Weitergabe zu speichern.</p>
        </Box>
    );
};
