import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <h1>Test</h1>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
