import { Grid, SwipeableDrawer } from '@mui/material';
import React from 'react';
import * as Style from './style';
import { IProduct } from '../Product';
import { useDispatch, useSelector } from 'react-redux';
import { ICart } from '../../state/reducers/cartReducer';
import { RootState } from '../../state/reducers';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/actions';
import ProductListItem from '../ProductListItem';

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
  const handleAddToCart = (product: IProduct) => {
    const dispatch = useDispatch();
    const { cart }: ICart = useSelector((state: RootState) => state.cart);
    const { addToCart, updateCart } = bindActionCreators(actionCreators, dispatch);
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      updateCart(product);
    } else {
      addToCart(product);
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
          {products.map((product, idx) => (
            <ProductListItem key={idx} product={product} addToCart={handleAddToCart} />
          ))}
        </Grid>
      </SwipeableDrawer>
    </Style.Wrapper>
  );
};

export default CartDrawer;
