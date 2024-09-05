import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

// Custom color mode manager to prevent cookies/localStorage
const noopStorageManager = {
  get: () => 'dark', // Always return dark mode
  set: () => { }      // No-op: Do nothing when setting mode
};

// Force dark mode only without storing the preference
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

// Create a custom theme with this config
const theme = extendTheme({ config });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme} colorModeManager={noopStorageManager}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
