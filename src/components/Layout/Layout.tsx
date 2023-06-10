import { FC } from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

import { Footer } from '../Footer';
import { Header } from '../Header';

export const Layout: FC = () => {
  const theme = useTheme();

  return (
    <Box paddingTop={'65px'} paddingBottom={'55px'} minHeight={'100vh'}>
      <Header/>
      <Box
        component={'main'}
        sx={{
          padding: { sm: '20px 24px', xs: '20px 16px' },
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Outlet/>
      </Box>
      <Footer/>
    </Box>
  );
};