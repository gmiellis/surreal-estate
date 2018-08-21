import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Icon,
} from '@material-ui/core';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Icon>location_city</Icon>
      <Typography variant="headline" color="inherit">
        Surreal Estates
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
