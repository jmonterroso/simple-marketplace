import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import React from 'react';
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
  subtotal: number;
  total: number;
  tax?: number;
}

const TotalsTable: React.FC<Props> = ({ total, subtotal, tax = 0 }) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  };
  return (
    <Style.Wrapper>
      <TableContainer component={Paper}>
        <Table component={'table'} aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell>Subtotal</TableCell>
              <TableCell align="right">{formatCurrency(subtotal)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tax</TableCell>
              <TableCell align="right">{tax === 0 ? '--' : formatCurrency(tax)}</TableCell>
            </TableRow>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>Total</TableCell>
              <TableCell align="right">{formatCurrency(total)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Style.Wrapper>
  );
};

export default TotalsTable;
