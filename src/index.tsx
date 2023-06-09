import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import App from './App';
import { ColorModeContextProvider } from './context/ColorModeContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ColorModeContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ColorModeContextProvider>
      <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'}/>
    </QueryClientProvider>
  </React.StrictMode>
);
