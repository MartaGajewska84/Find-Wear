import { Outlet, useNavigation } from 'react-router-dom';
import ButtonAppBar from '../components/NavBar';
import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Footer from '../components/Footer';

const Home = () => {
  const navigation = useNavigation();
  console.log(navigation);
  const isPageLoading = navigation.state === 'loading';
  console.log(isPageLoading);

  return (
    <>
      <ButtonAppBar />

      {isPageLoading ? (
        <Box
          sx={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Outlet />
      )}
      <Footer />
    </>
  );
};

export default Home;
