import { FC, ReactNode } from 'react';
import { Box } from '@mui/material';

import { Footer } from '../Footer';
import { Header } from '../Header';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Box paddingTop={'65px'} minHeight={'100vh'}>
      <Header/>
      {children}
      <Footer/>
    </Box>
  );
};