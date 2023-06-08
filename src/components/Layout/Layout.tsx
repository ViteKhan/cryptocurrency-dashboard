import { FC, ReactNode } from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { Footer } from '../Footer';
import { Header } from '../Header';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <Box paddingTop={'65px'} paddingBottom={'55px'} minHeight={'100vh'}>
      <Header/>
      <Box
        sx={{
          padding: '20px 24px',
          backgroundColor: theme.palette.background.default,
          minHeight: '100%',
        }}
      >
        {children}
      </Box>
      <Footer/>
    </Box>
  );
};