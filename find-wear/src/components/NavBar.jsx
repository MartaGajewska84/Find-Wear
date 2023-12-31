import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useMediaQuery, useTheme } from '@mui/material';
import TemporaryDrawer from './TopDrawer';


export default function ButtonAppBar() {
  const theme = useTheme();
  const isExtraSmallSize = useMediaQuery(theme.breakpoints.down('md'));
  console.log(isExtraSmallSize);
  
  return (
    <>
      {isExtraSmallSize ? (
        <TemporaryDrawer />
      ) : (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Find&Buy
              </Typography>
              <Button color="inherit" href="/">
                Home
              </Button>
              <Button color="inherit" href="/about">
                About
              </Button>
              <Button color="inherit" href="/newsletter">
                newsletter
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      )}
    </>
  );
}
