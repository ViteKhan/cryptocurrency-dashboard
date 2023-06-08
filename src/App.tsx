import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
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
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout><Dashboard/></Layout>,
    },
    {
      path: '/about',
      element: <Layout><About/></Layout>,
    },
    {
      path: '/contacts',
      element: <Layout><Contacts/></Layout>,
    },
  ]);

  return (
    <ApiContextProvider>
      <ThemeProvider theme={(theme as Record<string, Theme>)[colorMode]}>
        <CssBaseline/>
        <RouterProvider router={router}/>
      </ThemeProvider>
    </ApiContextProvider>
  );
}

export default App;
