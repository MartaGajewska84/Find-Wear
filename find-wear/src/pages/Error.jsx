import { useRouteError } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import img from '../assets/page-not-found.svg';

const Error = () => {
  const error = useRouteError();
  
  if (error.status === 404) {
    return (
      <>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Box
            component="img"
            src={img}
            sx={{
              width: 600,
              height: 500,
            }}
          ></Box>
          <Typography variant="h5" gutterBottom>
            We can't find page you are looking for
          </Typography>
          <Button href="/">Back home</Button>
        </Box>
      </>
    );
  }
  return <div>Error</div>;
};

export default Error;
