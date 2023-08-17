import { Outlet, useNavigation } from 'react-router-dom';
import ButtonAppBar from '../components/NavBar';
import { Box } from '@mui/material';

const Home = () => {
  const navigation = useNavigation()
  console.log(navigation)
  
  return (
    <>
      <ButtonAppBar />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default Home;
