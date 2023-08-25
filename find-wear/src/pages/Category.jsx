import { useQuery } from '@tanstack/react-query';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';

import ProductsList from '../components/ProductsList';

const categorySearchURL = `https://fakestoreapi.com/products/category/`;

const categoryQuery = (category) => {
  return {
    queryKey: ['category', category],
    queryFn: async () => {
      const { data } = await axios.get(`${categorySearchURL}${category}`);
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { category } = params;
    await queryClient.ensureQueryData(categoryQuery(category));
    return { category };
  };

const Category = () => {
  const { category } = useLoaderData();
  const { data } = useQuery(categoryQuery(category));
  console.log(data)
  return (
    <>
      <ProductsList products={data} />
    </>
  );
};

export default Category;
