import { FC } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { Drawer } from './Drawer';
import { useDisclosure } from './Sidebar-hooks';

export const Sidebar: FC = () => {
  const theme = useTheme();
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Button
          color={'inherit'}
          variant={'outlined'}
          onClick={onOpen}
          aria-label={'Menu'}
          sx={{
              display: { md: 'none', sm: 'flex' },
              alignItems: 'center',
              borderRadius: 2,
              minWidth: 'auto',
              padding: 1,
              color: theme.palette.text.secondary,
              borderColor: alpha(theme.palette.text.secondary, 0.2),
          }}
          >
            <MenuIcon fontSize={'medium'} />
        </Button>
        <Drawer isOpen={isOpen} onClose={onClose} />
    </>
  );
};