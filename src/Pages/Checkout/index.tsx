import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import * as Style from './style';
import { IProduct } from '../../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/actions';
import { RootState } from '../../state/reducers';
import { ICart } from '../../state/reducers/cartReducer';
import ProductListItem from '../../components/ProductListItem';
import TotalsTable from '../../components/TotalsTable';
import CheckoutForm from '../../components/CheckoutForm';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const Checkout: React.FC = () => {
  const [alerts, setAlerts] = useState({
    outOfStock: false /**/,
    addedToCart: false,
    removedFromCart: false,
  });
  const dispatch = useDispatch();
  const { cart, total, tax }: ICart = useSelector((state: RootState) => state.cart);
  const [confirmingPayment, setConfirmingPayment] = useState(false);
  const { setCartQty, deleteFromCart } = bindActionCreators(actionCreators, dispatch);
  const navigate = useNavigate();
  const handleUpdateQty = (product: IProduct) => {
    setCartQty(product);
  };
  const handleRemoveFromCart = (id: string) => {
    const existingProduct = cart.find((item) => item.id === id);
    if (existingProduct) {
      deleteFromCart(existingProduct.id);
      setAlerts({ ...alerts, removedFromCart: true });
    }
  };

  return (
    <Style.Wrapper>
      {confirmingPayment && (
        <Grid container className="confirm-payment">
          <Grid item lg={4} xs={12} mx={'auto'} px={{ textAlign: 'center' }}>
            <CircularProgress className={'spinner'} />
            <p>Confirming Payment</p>
          </Grid>
        </Grid>
      )}
      <Grid container mt={5}>
        <Grid item xs={12} mb={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Checkout
          </Typography>
        </Grid>
        {!cart.length ? (
          <Grid item xs={12} mb={4}>
            <Typography variant="h5" component="h2" gutterBottom>
              No items in cart
            </Typography>
            <Box mb={4} mt={3}>
              <Button component={RouterLink} to={'/'} color="primary" variant="outlined">
                Keep Shopping
              </Button>
            </Box>
          </Grid>
        ) : null}
        {cart.length ? (
          <>
            <Grid item lg={6}>
              <CheckoutForm
                onSubmit={() => {
                  setConfirmingPayment(true);
                  setTimeout(() => {
                    setConfirmingPayment(false);
                    navigate('/checkout/success', { replace: true });
                  }, 2000);
                }}
              />
            </Grid>
            <Grid item lg={6}>
              {cart.map((product, idx) => (
                <Grid item key={idx} mb={8}>
                  <ProductListItem
                    key={idx}
                    product={product}
                    updateCart={handleUpdateQty}
                    removeFromCart={handleRemoveFromCart}
                  />
                </Grid>
              ))}
              <TotalsTable tax={tax} total={total + (tax || 0)} subtotal={total} />
            </Grid>
          </>
        ) : null}
      </Grid>
    </Style.Wrapper>
  );
};

export default Checkout;
