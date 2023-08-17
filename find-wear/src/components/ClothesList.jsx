import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import MediaCard from './ClothCard';

const ClothesList = ({ clothes }) => {
  return (
    <Box sx={{ flexGrow: 1, mt: '2rem' }}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Grid
          container
          sx={{
            width: '80%',
          }}
          spacing={{ xs: 5, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {clothes.map((item, index) => (
            <Grid xs={2} sm={4} md={4} key={index}>
              <MediaCard key={item.id} {...item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ClothesList;
