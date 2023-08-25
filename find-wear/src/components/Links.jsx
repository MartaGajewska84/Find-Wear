import * as React from 'react';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';

export default function Links({ links }) {
  console.log(links);
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        typography: 'body1',
        '& > :not(style) ~ :not(style)': {
          ml: 2,
        },
        mt: '3rem',
      }}
    >
      {links.map((link) => {
        return (
          <Link href={`/products/category/${link}`} underline="hover">
            {link}
          </Link>
        );
      })}
    </Box>
  );
}
