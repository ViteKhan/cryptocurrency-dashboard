import React from 'react';
import { Theme, ThemeProvider } from '@mui/material/styles';

import { theme } from './theme';
import { useColorMode } from './context/ColorModeContext';

import './App.css';

function App() {
  const { colorMode } = useColorMode();

  return (
    <ThemeProvider theme={(theme as Record<string, Theme>)[colorMode]}>
      <div className="App">
      </div>
    </ThemeProvider>
  );
}

export default App;
