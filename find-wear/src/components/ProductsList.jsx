import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import MediaCard from './ProductCard';
import Links from './Links';

const ProductsList = ({ products }) => {
  const links = [
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
  ];
  return (
    <>
      <Links links={links} />
      <Grid
        container
        width="80%"
        my="3rem"
        mx="auto"
        spacing={{ xs: 4, md: 3 }}
        columnSpacing={{ xs: 3, sm: 3 }}
      >
        {products.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <MediaCard key={item.id} {...item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductsList;
