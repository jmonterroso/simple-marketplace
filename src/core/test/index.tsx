import { theme } from '../../theme';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';

export const mountScene = (children: React.ReactNode) => (
  <ThemeProvider theme={theme}>
    <Router>
      <div className="App">{children}</div>
    </Router>
  </ThemeProvider>
);
