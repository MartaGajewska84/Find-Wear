import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import img from '../assets/shopping.svg';

const About = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={6}
        sx={{
          m: { xs: '1rem', md: '2rem' },
          mt: { xs: '3rem', md: '2rem' },
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Grid xs={12} md={6} sx={{ display: 'flex' }}>
          <Box
            component="img"
            src={img}
            sx={{ minWidth: { md: 200, xs: 180 } }}
          ></Box>
        </Grid>
        <Grid
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center' },
            flexDirection: 'column',
          }}
        >
          <Typography variant="h5" sx={{ mb: '1rem' }}>
            About Us
          </Typography>
          <Typography variant="body1" component="p">
            About Us Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
