import { Button, Card, CardActions, CardContent, CardMedia, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import * as Style from './style';

export interface ILogin {
  email: string;
  password: string;
}

export interface IProduct {
  id: string;
  name: string;
  image: string;
  description: string;
  price: string;
  sku: string;
  qty: number;
  stock: number;
}

export interface Props {
  addToCart: (qty: IProduct) => void;
  product: IProduct;
}

const Product: React.FC<Props> = ({ addToCart, product }) => {
  const [currentProduct, setCurrentProduct] = useState<IProduct>({ ...product, qty: product.qty || 1 });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentProduct({
      ...currentProduct,
      qty: parseFloat(event.target.value),
    });
  };
  const handleAddToCart = () => {
    addToCart(currentProduct);
  };
  return (
    <Style.Wrapper>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" height="140" image={product.image} alt={product.name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name} - {product.id}
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            {product.description} <br />
            {product.sku}
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={3}>
            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(parseFloat(product.price))}
          </Typography>
          <TextField
            onChange={handleChange}
            type={'number'}
            fullWidth
            id="qty"
            name="qty"
            size={'small'}
            value={currentProduct.qty || 1}
            label="Quantity"
            variant="outlined"
          />
        </CardContent>
        <CardActions>
          <Button fullWidth size="small" variant="contained" color="primary" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Style.Wrapper>
  );
};

export default Product;
