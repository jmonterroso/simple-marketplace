import { Alert, Grid, Snackbar, SwipeableDrawer, Typography } from '@mui/material';
import React, { useState } from 'react';
import * as Style from './style';
import { IProduct } from '../Product';
import { useDispatch, useSelector } from 'react-redux';
import { ICart } from '../../state/reducers/cartReducer';
import { RootState } from '../../state/reducers';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/actions';
import ProductListItem from '../ProductListItem';
import TotalsTable from '../TotalsTable';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';

export interface ILogin {
  email: string;
  password: string;
}

export interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  products: IProduct[];
}

const CartDrawer: React.FC<Props> = ({ open, products, setOpen }) => {
  const { cart, total, tax }: ICart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const { updateCart, deleteFromCart } = bindActionCreators(actionCreators, dispatch);
  const [alerts, setAlerts] = useState({
    removedFromCart: false,
  });
  const handleAddToCart = (product: IProduct) => {
    updateCart(product);
  };

  const hasCartProducts = cart.length > 0;
  const handleRemoveFromCart = (id: string) => {
    const existingProduct = cart.find((item) => item.id === id);
    if (existingProduct) {
      deleteFromCart(existingProduct.id);
      setAlerts({ ...alerts, removedFromCart: true });
    }
  };
  return (
    <Style.Wrapper>
      <SwipeableDrawer
        anchor={'right'}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        onOpen={() => {
          console.log('onOpen');
        }}
      >
        <Grid container direction={'column'} spacing={3} py={5} px={5}>
          <Grid item>
            <Typography variant="h4" color="primary" mb={2}>
              Cart
            </Typography>
          </Grid>
          {!hasCartProducts && (
            <Typography variant="body2" color="text.secondary" mb={2}>
              No products in cart
            </Typography>
          )}
          {products.map((product, idx) => (
            <Grid item key={idx} mb={1}>
              <ProductListItem
                key={idx}
                product={product}
                updateCart={handleAddToCart}
                removeFromCart={handleRemoveFromCart}
              />
            </Grid>
          ))}
          {hasCartProducts && (
            <>
              <Grid item>
                <TotalsTable tax={tax} total={total + (tax || 0)} subtotal={total} />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  onClick={() => setOpen(false)}
                  component={RouterLink}
                  to={'/checkout'}
                  fullWidth
                  size={'large'}
                >
                  Proceed to Checkout
                </Button>
              </Grid>
            </>
          )}
        </Grid>
      </SwipeableDrawer>
      <Snackbar
        open={alerts.removedFromCart}
        autoHideDuration={2000}
        onClose={() => setAlerts({ ...alerts, removedFromCart: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert severity="info">Product Removed from the Cart</Alert>
      </Snackbar>
    </Style.Wrapper>
  );
};

export default CartDrawer;
