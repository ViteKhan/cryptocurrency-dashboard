import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { ColorModeContextProvider } from './context/ColorModeContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ColorModeContextProvider>
      <App />
    </ColorModeContextProvider>
  </React.StrictMode>
);
