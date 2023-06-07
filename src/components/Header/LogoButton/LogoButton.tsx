import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { indigo } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';

import { useColorMode } from 'context/ColorModeContext';

export const LogoButton: FC = () => {
  const theme = useTheme();
  const { colorMode } = useColorMode();

  return (
    <Link to={'/'} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: indigo[500],
          height: 45,
          width: 45,
          marginRight: '15px',
          borderRadius: '10px',
          cursor: 'pointer',
        }}
      >
        <CurrencyExchangeOutlinedIcon sx={{ color: 'white' }}/>
      </Box>
      <Typography
        variant={'h5'}
        sx={{
          color: colorMode === 'dark' ? theme.palette.text.primary : theme.palette.primary.dark,
          fontWeight: 500,
          fontSize: { md: '24px', sm: '20px' },
          display: { sm: 'inline', xs: 'none' },
        }}
      >
        Cryptocurrency Dashboard
      </Typography>
    </Link>
  );
};