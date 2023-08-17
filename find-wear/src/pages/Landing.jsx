import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import { QueryClient, useQuery } from '@tanstack/react-query';

import ClothesList from '../components/ClothesList';

const productsSearchURL = `https://fakestoreapi.com/products`;

// const searchClothesQuery = () => {
//   return {
//     queryKey: ['search'],
//     queryFn: async () => {
//       const response = await axios.get(productsSearchURL)
//       console.log(response)
//     }
//   }
// }



export const loader = async ({params}) => {
  //const {id} = params;
  const {data} = await axios.get(`${productsSearchURL}`);
  console.log(data)
  
  return {data};
};

const Landing = () => {
  const {data} = useLoaderData();
  return (
    <>
      <ClothesList clothes={data} />
    </>
  );
};

export default Landing;
