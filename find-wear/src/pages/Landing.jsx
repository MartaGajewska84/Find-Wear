import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import ProductsList from '../components/ProductsList';

const productsSearchURL = `https://fakestoreapi.com/products`;

const searchClothesQuery = () => {
  return {
    queryKey: ['search'],
    queryFn: async () => {
      const response = await axios.get(productsSearchURL);
      const {data} = response
      console.log(data);

      return data;
    },
  };
};

export const loader = (queryClient) => async ({ request }) => {
  //const url = new URL(request.url);
  //const id = url.searchParams.get('search') || '';
  return await queryClient.ensureQueryData(searchClothesQuery());
  ;
};

const Landing = () => {
  //const { id } = useLoaderData();
  const { data } = useQuery(searchClothesQuery());
  return (
    <>
      <ProductsList products={data} />
    </>
  );
};

export default Landing;
