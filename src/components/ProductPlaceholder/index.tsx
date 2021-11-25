import { Card, CardActions, CardContent, Skeleton } from '@mui/material';
import React from 'react';

const ProductPlaceholder: React.FC = () => {
  return (
    <Card className="same-height" sx={{ maxWidth: 345 }} data-testid={'product-placeholder'}>
      <Skeleton animation="wave" height={140} />
      <CardContent>
        <Skeleton animation="wave" height={14} width="80%" style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={14} width="40%" />
        <Skeleton animation="wave" height={14} width="40%" />
        <Skeleton animation="wave" height={40} width="100%" />
      </CardContent>
      <CardActions>
        <Skeleton animation="wave" height={30} width="100%" />
      </CardActions>
    </Card>
  );
};

export default ProductPlaceholder;
