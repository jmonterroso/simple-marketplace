import { Alert, Grid, Snackbar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import * as Style from './style';
import { fetchProducts } from '../../api';
import Product, { IProduct } from '../../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/actions';
import { RootState } from '../../state/reducers';
import { ICart } from '../../state/reducers/cartReducer';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [alerts, setAlerts] = useState({
    outOfStock: false,
  });
  const dispatch = useDispatch();
  const { cart }: ICart = useSelector((state: RootState) => state.cart);
  const { addToCart, updateCart } = bindActionCreators(actionCreators, dispatch);
  useEffect(() => {
    const fetchData = async () => {
      const productsFetched = await fetchProducts();
      setProducts(productsFetched);
    };
    fetchData();
  }, []);
  const handleAddToCart = (product: IProduct) => {
    console.log('Add to cart', product);
    if (product.qty && product?.qty > product.stock) {
      setAlerts({
        ...alerts,
        outOfStock: true,
      });
    } else {
      const existingProduct = cart.find((item) => item.id === product.id);
      if (existingProduct) {
        console.log('updating product');
        updateCart(product);
      } else {
        addToCart(product);
      }
    }
  };
  return (
    <Style.Wrapper>
      <Grid container spacing={2} mt={5}>
        {products.map((product, idx) => (
          <Grid item xs={12} sm={4} key={idx} mb={5} justifyContent={'center'} alignItems={'center'}>
            <Product addToCart={handleAddToCart} key={idx} product={product} />
          </Grid>
        ))}
        <Snackbar
          open={alerts.outOfStock}
          autoHideDuration={4000}
          onClose={() => setAlerts({ ...alerts, outOfStock: false })}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Alert severity="error">Product Out of Stock</Alert>
        </Snackbar>
      </Grid>
    </Style.Wrapper>
  );
};

export default ProductList;
