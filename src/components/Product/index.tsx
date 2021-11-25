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
  description: string;
  price: number;
  sku: string;
  qty?: number;
}

export interface Props {
  addToCart: (qty: number) => void;
  product: IProduct;
}

const Product: React.FC<Props> = ({ addToCart, product }) => {
  const [currentProduct, setCurrentProduct] = useState<IProduct>(product);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentProduct({
      ...currentProduct,
      qty: parseInt(event.target.value),
    });
  };
  const handleAddToCart = () => {
    addToCart(currentProduct.qty || 1);
  };
  return (
    <Style.Wrapper>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=webp&v=1530129081"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            Description:
            {product.description} <br />
            SKU: {product.sku}
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={3}>
            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}
          </Typography>
          <TextField
            onChange={handleChange}
            type={'number'}
            fullWidth
            id="qty"
            name="qty"
            value={currentProduct.qty}
            label="Quantity"
            variant="outlined"
          />
        </CardContent>
        <CardActions>
          <Button fullWidth size="small" color={'primary'} onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Style.Wrapper>
  );
};

export default Product;
