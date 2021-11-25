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
import ProductList from './Pages/ProductList';
import { ICart } from './state/reducers/cartReducer';

function App() {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const { cart }: ICart = useSelector((state: RootState) => state.cart);
  console.log(cart, 'cart ');
  const itemsCount = cart.reduce((acc, item) => {
    console.log(acc, 'acc ');
    console.log(item, 'item.qty ');
    return acc + item.qty;
  }, 0);
  const dispatch = useDispatch();
  const { setAuth } = bindActionCreators(actionCreators, dispatch);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <NavBar
            items={itemsCount}
            isLoggedIn={isAuthenticated}
            onLogout={() => setAuth({ isAuthenticated: false, user: undefined })}
          />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<ProductList />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
