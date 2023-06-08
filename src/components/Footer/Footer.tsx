import { FC } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { GithubLink } from './GithubLink';
import { ScrollButton } from './ScrollButton';

export const Footer: FC = () => {
  const theme = useTheme();

  return (
    <Box
      component={'footer'}
      sx={{
        background: theme.palette.background.default,
        position: 'fixed',
        display: 'flex',
        bottom: 0,
        left: 0,
        right: 0,
        height: '55px',
        boxShadow: '0px -1px 14px 0px rgba(0,0,0,0.12),' +
          '0px -5px 8px 0px rgba(0,0,0,0.14), 0px -3px 5px -1px rgba(0,0,0,0.2)',
      }}
    >
      <Divider />
      <Box
        sx={{
          background: theme.palette.background.default,
          padding: '0px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : theme.palette.primary.main,
        }}>
          <Typography sx={{ display: { sm: 'inline', xs: 'none' } }}>Created by</Typography>
          <GithubLink/>
        </Box>
        <ScrollButton/>
      </Box>
    </Box>
  );
};