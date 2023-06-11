import { useLayoutEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Routes, useLocation } from "react-router-dom";
import { Theme, ThemeProvider } from '@mui/material/styles';

import { About } from 'pages/About';
import { ApiContextProvider } from './API';
import { Contacts } from 'pages/Contacts';
import { Dashboard } from 'pages/Dashboard';
import { Layout } from 'components/Layout';
import { theme } from './theme';
import { useColorMode } from './context/ColorModeContext';

function App() {
  const { colorMode } = useColorMode();
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ThemeProvider theme={(theme as Record<string, Theme>)[colorMode]}>
        <CssBaseline/>
        <ApiContextProvider>
          <Routes>
            <Route element={<Layout/>}>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/contacts" element={<Contacts/>} />
            </Route>
          </Routes>
        </ApiContextProvider>
      </ThemeProvider>
  );
}

export default App;
