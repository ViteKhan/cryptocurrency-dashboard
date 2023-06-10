import { BrowserRouter, Route, Routes } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Theme, ThemeProvider } from '@mui/material/styles';

import { About } from 'pages/About';
import { ApiContextProvider } from './API';
import { Contacts } from 'pages/Contacts';
import { Dashboard } from 'pages/Dashboard';
import { Layout } from 'components/Layout';
import { theme } from './theme';
import { useColorMode } from './context/ColorModeContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 500,
    },
  },
});

function App() {
  const { colorMode } = useColorMode();

  return (
    <QueryClientProvider client={queryClient}>
      <ApiContextProvider>
        <ThemeProvider theme={(theme as Record<string, Theme>)[colorMode]}>
          <CssBaseline/>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout/>}>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contacts" element={<Contacts/>} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </ApiContextProvider>
    </QueryClientProvider>
  );
}

export default App;
