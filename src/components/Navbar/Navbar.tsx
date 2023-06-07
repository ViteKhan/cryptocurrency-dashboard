import { FC } from 'react';
import DashboardIcon from '@mui/icons-material/DashboardOutlined';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import HelpIcon from '@mui/icons-material/HelpOutlineOutlined';

import { NavLink } from '../NavLink';

export const Navbar: FC = () => (
  <>
    <NavLink
      href={'/'}
      icon={<DashboardIcon/>}
      text={'Dashboard'}
    />
    <NavLink
      href={'/about'}
      icon={<HelpIcon/>}
      text={'About'}
    />
    <NavLink
      href={'#'}
      icon={<EmailIcon />}
      text={'Contact'}
    />
  </>
);