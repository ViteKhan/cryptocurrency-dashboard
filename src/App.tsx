import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { Theme, ThemeProvider } from '@mui/material/styles';

import { ApiContextProvider } from './API';
import { Layout } from 'components/Layout';
import { theme } from './theme';
import { useColorMode } from './context/ColorModeContext';

function App() {
  const { colorMode } = useColorMode();
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout>
          <div>main page</div>
        </Layout>
      ),
    },
    {
      path: '/about',
      element: (
        <Layout>
          <div>about</div>
        </Layout>
      ),
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
