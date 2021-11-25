import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemText, TextField } from '@mui/material';
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
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

const ProductListItem: React.FC<Props> = ({ addToCart, product }) => {
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
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar src={product.image} />
        </ListItemAvatar>
        <ListItemText primary={product.name} />
        <ListItemText
          primary={new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
            parseFloat(product.price)
          )}
        />
        <TextField
          onChange={handleChange}
          type={'number'}
          id="qty"
          name="qty"
          value={currentProduct.qty || 1}
          label="Quantity"
          variant="outlined"
        />
      </ListItem>
    </Style.Wrapper>
  );
};

export default ProductListItem;
