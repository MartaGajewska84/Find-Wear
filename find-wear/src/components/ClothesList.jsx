import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import MediaCard from './ClothCard';

const ClothesList = ({ clothes }) => {
  return (
    <Box sx={{ flexGrow: 1, mt: '2rem', m: {md: '0.5rem'}}}>
      <Grid
        disableEqualOverflow
        container
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 3, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 15 }}
      >
        {clothes.map((item, index) => (
          <Grid  sm={3} md={4} key={index}>
            <MediaCard key={item.id} {...item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ClothesList;
