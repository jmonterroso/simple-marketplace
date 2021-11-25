import { ThemeProvider } from '@mui/material/styles';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { theme } from './theme';
import NavBar from './components/Layout/NavBar';
import { useSelector } from 'react-redux';
import { RootState } from './state/reducers';
import Login from './Pages/Login';

function App() {
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    console.log('bioy');
    console.log(isAuthenticated, 'isAuthenticated ');
  }, [isAuthenticated]);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <NavBar isLoggedIn={isAuthenticated} />
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
