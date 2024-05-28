import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#3f51b5', marginBottom: '20px' }}>
      <Toolbar style={{ justifyContent: 'center', position: 'relative' }}>
        <Typography variant="h4" style={{ textAlign: 'center' }}>
          Trading Leaderboard
        </Typography>
        <Box style={{ position: 'absolute', right: 20 }}>
          <IconButton color="inherit" variant='h6'>
            <MonetizationOnIcon /><h6>100</h6>
          </IconButton>
          <IconButton color="inherit" variant ='h6'>
            <AccountCircleIcon /><h6>Profile</h6>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
