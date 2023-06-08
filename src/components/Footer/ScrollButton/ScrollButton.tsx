import { FC } from 'react';
import { Fab } from '@mui/material';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import { useTheme } from '@mui/material/styles';

import { useScroll } from './ScrollButton-hooks';

export const ScrollButton: FC = () => {
  const theme = useTheme();
  const { showScrollButton, handleScrollTop } = useScroll();

  if (!showScrollButton) return null;

  return (
    <Fab
      color={'primary'}
      aria-label={'scroll to top'}
      size={'small'}
      onClick={handleScrollTop}
      sx={{
        '&:hover': {
          backgroundColor: 'transparent',
          color: theme.palette.primary.main,
          border: '2px solid' + theme.palette.primary.main,
        },
      }}
    >
      <KeyboardArrowUpRoundedIcon />
    </Fab>
  );
};