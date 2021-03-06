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
  updateCart: (qty: IProduct) => void;
  removeFromCart: (id: string) => void;
  product: IProduct;
}

const ProductListItem: React.FC<Props> = ({ updateCart, product, removeFromCart }) => {
  const [currentProduct, setCurrentProduct] = useState<IProduct>({ ...product, qty: product.qty || 1 });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentProduct({
      ...currentProduct,
      qty: parseFloat(event.target.value),
    });
  };

  const handleUpdateCart = () => {
    updateCart(currentProduct);
  };
  return (
    <Style.Wrapper>
      <ListItem
        secondaryAction={
          <IconButton
            data-testid={'remove-product'}
            edge="end"
            aria-label="delete"
            onClick={() => removeFromCart(currentProduct.id)}
          >
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
          size={'small'}
          value={currentProduct.qty || 1}
          onBlur={handleUpdateCart}
          label="Quantity"
          variant="outlined"
          inputProps={{
            'data-testid': 'update-product-input',
          }}
        />
      </ListItem>
    </Style.Wrapper>
  );
};

export default ProductListItem;
