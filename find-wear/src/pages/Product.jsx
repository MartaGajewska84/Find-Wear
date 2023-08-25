import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Box, Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

const productUrl = 'https://fakestoreapi.com/products/';

const productQuery = (id) => {
  return {
    queryKey: ['product', id],
    queryFn: async () => {
      const { data } = await axios.get(`${productUrl}${id}`);
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    await queryClient.ensureQueryData(productQuery(id));
    return { id };
  };

const Product = () => {
  const { id } = useLoaderData();
  const { data } = useQuery(productQuery(id));
  console.log(data);

  return (
    <>
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
          <Grid
            xs={12}
            md={6}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Box
              component="img"
              src={data.image}
              sx={{ maxWidth: { md: 350, xs: 180 } }}
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
            <Typography variant="h4" sx={{ mb: '1rem' }}>
              {data.title}
            </Typography>
            <Typography variant="h6" sx={{ mb: '1rem' }}>
              Category: {data.category}
            </Typography>

            <Typography variant="body1" sx={{ mb: '1rem', display: 'flex' }}>
              What our users think :
              <Rating name="read-only" value={data.rating.rate} readOnly />(
              {data.rating.count} votes)
            </Typography>

            <Typography variant="body1" component="p">
              {data.description}
            </Typography>
            <Box mt="2rem">
              <Button href="/" type="small">
                Back home
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Product;
