import { AppBar, Box, Divider, Toolbar } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { ColorModeToggler } from './ColorModeToggler';
import { LogoButton } from './LogoButton';
import { Navbar } from 'components/Navbar';
import { Sidebar } from 'components/Sidebar';

export const Header = () => {
  const theme = useTheme();

  return (
    <AppBar
      elevation={5}
      sx={{
        top: 0,
        border: 0,
        backgroundColor: theme.palette.background.default,
        backgroundImage: 'none',
        color: theme.palette.text.secondary
      }}
    >
      <Toolbar sx={{ height: '65px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', gap: '15px' }}>
          <Sidebar/>
          <LogoButton/>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ display: { md: 'flex', xs: 'none' }, gap: '10px', alignItems: 'center' }}>
            <Navbar/>
          </Box>
          <Divider orientation={'vertical'} sx={{ height: 35, mx: 1.5, display: { md: 'flex', xs: 'none' }}}/>
          <ColorModeToggler/>
        </Box>
      </Toolbar>
    </AppBar>
  );
};