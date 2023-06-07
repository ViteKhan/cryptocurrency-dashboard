import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { Theme, ThemeProvider } from '@mui/material/styles';

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
          <div>test</div>
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
    <ThemeProvider theme={(theme as Record<string, Theme>)[colorMode]}>
      <CssBaseline/>
      <RouterProvider router={router}/>
    </ThemeProvider>
  );
}

export default App;
