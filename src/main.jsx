import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Optional: Customize your theme colors here
const theme = createTheme({
  palette: {
    primary: {
      main: '#2a6df4',
    },
    background: {
      default: '#f4f6fb',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
