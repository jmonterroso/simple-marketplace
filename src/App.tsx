import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { theme } from './theme';
import NavBar from './components/Layout/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './state/reducers';
import Login from './Pages/Login';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/actions';

function App() {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const { setAuth } = bindActionCreators(actionCreators, dispatch);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <NavBar isLoggedIn={isAuthenticated} onLogout={() => setAuth({ isAuthenticated: false, user: undefined })} />
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
