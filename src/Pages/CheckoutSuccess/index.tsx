import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import * as Style from './style';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link as RouterLink } from 'react-router-dom';

const CheckoutSuccess: React.FC = () => {
  return (
    <Style.Wrapper>
      <Grid container className="confirm-payment" direction="column">
        <Grid item lg={4} xs={12} mx={'auto'} px={{ textAlign: 'center' }}>
          <Typography variant="h4" component="h1">
            Thank you for your order! <CheckCircleIcon color="primary" />
          </Typography>
          <Box mb={4}>
            <Typography variant="h6" component="h2">
              We will send you an email confirmation shortly.
            </Typography>
          </Box>{' '}
          <Box mb={4}>
            <Button component={RouterLink} to={'/'} color="primary" variant="contained">
              Keep Shopping
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Style.Wrapper>
  );
};

export default CheckoutSuccess;
