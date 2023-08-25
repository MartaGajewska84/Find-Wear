import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createTheme, ThemeProvider } from '@mui/material';

import {
  Home,
  About,
  Newsletter,
  Error,
  Landing,
  Product,
  Category,
} from './pages';
import { loader as landingLoader } from './pages/Landing';
import { loader as productLoader } from './pages/Product';
import { loader as categoryLoader } from './pages/Category';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#80cbc4',
    },
    secondary: {
      main: '#f44336',
    },
  },
  typography: {
    fontFamily: 'Quicksand',
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader(queryClient),
      },
      {
        path: 'product/:id',
        element: <Product />,
        loader: productLoader(queryClient),
      },
      {
        path: 'products/category/:category',
        element: <Category />,
        loader: categoryLoader(queryClient),
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
