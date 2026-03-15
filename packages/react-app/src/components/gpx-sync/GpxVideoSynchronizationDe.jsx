import { Box, Text } from '@chakra-ui/react';

export const GpxVideoSynchronizationDe = () => {
    return (
        <Box maxWidth="800px" width="100%" my="40px" mx="auto" py={6} px={4} className="drumuri-article">
            <Text fontSize="xl" fontWeight="bold" mb={4}>
                GPX-Tracks mit Videos synchronisieren
            </Text>

            <p>Mit <strong><a href="https://drumuri.bike" target="_blank">drumuri.bike</a></strong> lassen sich nicht nur eigene virtuelle Routen erstellen, sondern auch GPX-Tracks mit Videos synchronisieren. Dadurch kann nahezu jede aufgezeichnete Strecke mit einem passenden Video kombiniert werden – zum Beispiel mit einem YouTube-Video oder einer lokalen Videodatei. Das Ergebnis ist eine virtuelle Fahrt, bei der Route und Video zeitlich exakt zusammenpassen.</p>

            <p>Die Synchronisation erfolgt über einen Editor, in dem sogenannte Ankerpunkte gesetzt werden. An diesen Punkten wird festgelegt, welche Stelle im Video zu welcher Position auf der Strecke gehört. Sobald mehrere dieser Punkte definiert sind, berechnet das System automatisch die zeitliche Zuordnung zwischen Video und GPX-Track für die gesamte Route.</p>

            <p>Auf <strong><a href="https://drumuri.bike" target="_blank">drumuri.bike</a></strong> kann die synchronisierte Route anschließend direkt als Workout gefahren werden. Während das Video im Hintergrund läuft, werden Trainingsdaten wie Geschwindigkeit, Leistung, Kadenz oder Herzfrequenz angezeigt. Kartenansicht, Höhenprofil und Fortschrittsanzeigen ergänzen das Video zu einer vollständigen Indoor-Trainingserfahrung.</p>

            <p>Die Synchronisationstechnologie steht außerdem als eigenständiges Werkzeug unter <strong><a href="https://gpxsynchronizer.com/" target="_blank">gpxsynchronizer.com</a></strong> zur Verfügung. Dort liegt der Fokus ausschließlich auf dem Synchronisieren von GPX-Tracks und Videos. Das Tool eignet sich besonders für Anwender, die synchronisierte GPX-Dateien erzeugen möchten, um sie anschließend in anderer Software oder eigenen Projekten zu verwenden.</p>

            <p>Ein großer Vorteil dieses Ansatzes ist die Offenheit des Systems. Anstatt auf eine geschlossene Sammlung vorgefertigter Strecken angewiesen zu sein, können Nutzer vorhandene Videos mit ihren eigenen Routen kombinieren. So lassen sich reale Strecken aus aller Welt in virtuelle Fahrten oder Läufe verwandeln – sei es für Training, Simulation oder einfach zum erneuten Erleben einer bekannten Route.</p>

            <p>Damit verbindet die Synchronisationsfunktion reale Streckendaten mit vorhandenen Videoaufnahmen und schafft eine flexible Grundlage für virtuelle Outdoor-Erlebnisse im Indoor-Training.</p>
        </Box>
    );
};
