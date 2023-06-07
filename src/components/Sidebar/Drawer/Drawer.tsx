import { FC } from 'react';
import { Box, Drawer as MuiDrawer } from '@mui/material';

import { Navbar } from 'components/Navbar';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Drawer: FC<DrawerProps> = ({ isOpen, onClose }) => {
  return (
    <MuiDrawer
        anchor='left'
        onClose={onClose}
        open={isOpen}
        variant='temporary'
        sx={{
          '& .MuiPaper-root': {
            width: '100%',
            maxWidth: 280,
            padding: '20px',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Navbar/>  
        </Box>
      </MuiDrawer>
  );
};