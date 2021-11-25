import { Grid, Typography } from '@mui/material';
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

const Checkout: React.FC = () => {
  const [alerts, setAlerts] = useState({
    outOfStock: false /**/,
    addedToCart: false,
    removedFromCart: false,
  });
  const dispatch = useDispatch();
  const { cart, total, tax }: ICart = useSelector((state: RootState) => state.cart);
  console.log(total);
  const { setCartQty, deleteFromCart } = bindActionCreators(actionCreators, dispatch);

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
      <Grid container mt={5}>
        <Grid item xs={12} mb={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Checkout
          </Typography>
        </Grid>

        <Grid item lg={6}></Grid>
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
      </Grid>
    </Style.Wrapper>
  );
};

export default Checkout;
