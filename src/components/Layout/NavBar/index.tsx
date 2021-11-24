import { AppBar, Badge, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import * as Style from './style';
import MenuIcon from '@mui/icons-material/Menu';
import { labels } from './constants';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link as RouterLink } from 'react-router-dom';

export interface Props {
  title?: string;
  isLoggedIn: boolean;
  items?: number;
}

const NavBar: React.FC<Props> = ({ title = labels.title, isLoggedIn = false, items = 0 }) => {
  return (
    <Style.Wrapper>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {title}
            </Typography>
            <IconButton size="large" aria-label={`show ${items} in cart`} color="inherit">
              <Badge badgeContent={items} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <Button component={RouterLink} to={'/login'} color="inherit">
              {isLoggedIn ? labels.logout : labels.login}
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </Style.Wrapper>
  );
};

export default NavBar;
