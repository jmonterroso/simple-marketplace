import { Alert, Grid, IconButton, InputBase, Paper, Snackbar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import * as Style from './style';
import { fetchProducts } from '../../api';
import Product, { IProduct } from '../../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/actions';
import { RootState } from '../../state/reducers';
import { ICart } from '../../state/reducers/cartReducer';
import SearchIcon from '@mui/icons-material/Search';
import ProductPlaceholder from '../../components/ProductPlaceholder';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [alerts, setAlerts] = useState({
    outOfStock: false,
    addedToCart: false,
  });
  const dispatch = useDispatch();
  const { cart }: ICart = useSelector((state: RootState) => state.cart);
  const { addToCart, updateCart } = bindActionCreators(actionCreators, dispatch);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const fetchData = async () => {
    const productsFetched = await fetchProducts();
    setProducts(productsFetched);
    setLoadingProducts(false);
  };
  useEffect(() => {
    setLoadingProducts(true);
    fetchData();
  }, []);
  const handleAddToCart = (product: IProduct) => {
    if (product.qty && product?.qty > product.stock) {
      setAlerts({
        ...alerts,
        outOfStock: true,
      });
    }
    const existingProduct = cart.find((item) => item.id === product.id);
    setAlerts({
      ...alerts,
      addedToCart: true,
    });
    if (existingProduct) {
      updateCart(product);
    } else {
      addToCart(product);
    }
  };

  const searchProducts = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    if (searchTerm) {
      const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setProducts(filteredProducts);
    } else {
      fetchData();
    }
  };
  return (
    <Style.Wrapper>
      <Grid container mt={4} lg={12}>
        <Grid item width={'40%'}>
          <Paper component="div" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}>
            <InputBase onChange={searchProducts} fullWidth={true} sx={{ ml: 1, mr: 1, flex: 1 }} placeholder="Search" />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>

      {loadingProducts && (
        <Grid container spacing={2} mt={5}>
          {new Array(15).fill(0).map((_, index) => (
            <Grid item xs={12} sm={4} mt={'auto'} key={index}>
              <ProductPlaceholder />
            </Grid>
          ))}
        </Grid>
      )}

      {!loadingProducts && products.length === 0 && (
        <Grid container spacing={2} mt={5}>
          <Grid item lg={4} xs={12} mx={'auto'} px={{ textAlign: 'center' }}>
            <p>No Products Found</p>
          </Grid>
        </Grid>
      )}
      {products.length ? (
        <Grid container spacing={2} mt={5}>
          {products.map((product, idx) => (
            <Grid item xs={12} sm={4} key={idx} mt={'auto'}>
              <Product addToCart={handleAddToCart} product={product} />
            </Grid>
          ))}
          <Snackbar
            open={alerts.outOfStock}
            autoHideDuration={2000}
            onClose={() => setAlerts({ ...alerts, outOfStock: false })}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          >
            <Alert severity="error">Product Out of Stock</Alert>
          </Snackbar>
          <Snackbar
            open={alerts.addedToCart}
            autoHideDuration={2000}
            onClose={() => setAlerts({ ...alerts, addedToCart: false })}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          >
            <Alert severity="success">Product Added to Cart</Alert>
          </Snackbar>
        </Grid>
      ) : null}
    </Style.Wrapper>
  );
};

export default ProductList;
