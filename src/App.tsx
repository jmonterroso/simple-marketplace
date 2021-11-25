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
import CartDrawer from './components/CartDrawer';
import Checkout from './Pages/Checkout';
import CheckoutSuccess from './Pages/CheckoutSuccess';

function App() {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const { cart }: ICart = useSelector((state: RootState) => state.cart);
  console.log(cart, 'cart ');
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const itemsCount = cart.reduce((acc, item) => acc + item.qty, 0);
  const dispatch = useDispatch();
  const { setAuth } = bindActionCreators(actionCreators, dispatch);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <NavBar
            items={itemsCount}
            onClickCart={() => setOpenDrawer(true)}
            isLoggedIn={isAuthenticated}
            onLogout={() => setAuth({ isAuthenticated: false, user: undefined })}
          />
          <CartDrawer setOpen={setOpenDrawer} open={openDrawer} />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<ProductList />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout/success" element={<CheckoutSuccess />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
