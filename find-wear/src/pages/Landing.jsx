import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import ProductsList from '../components/ProductsList';

const productsSearchURL = `https://fakestoreapi.com/products`;

const searchClothesQuery = () => {
  return {
    queryKey: ['search'],
    queryFn: async () => {
      const response = await axios.get(productsSearchURL);
      const { data } = response;
      console.log(data);

      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    return await queryClient.ensureQueryData(searchClothesQuery());
  };

const Landing = () => {
  const { data } = useQuery(searchClothesQuery());
  return (
    <>
      <ProductsList products={data} />
    </>
  );
};

export default Landing;
