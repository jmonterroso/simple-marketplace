import { theme } from '../../theme';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import store from '../../state/store';
import { Provider } from 'react-redux';

export const mountScene = (children: React.ReactNode) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </Provider>
);

export const MountTestScene: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Router>
    </Provider>
  );
};
