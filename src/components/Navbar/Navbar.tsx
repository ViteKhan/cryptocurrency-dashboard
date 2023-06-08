import { FC } from 'react';
import DashboardIcon from '@mui/icons-material/DashboardOutlined';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import HelpIcon from '@mui/icons-material/HelpOutlineOutlined';

import { NavLink } from '../NavLink';

interface NavbarProps {
  onClose: () => void;
}

export const Navbar: FC<NavbarProps> = ({ onClose }) => (
  <>
    <NavLink
      href={'/'}
      icon={<DashboardIcon/>}
      onClose={onClose}
      text={'Dashboard'}
    />
    <NavLink
      href={'/about'}
      icon={<HelpIcon/>}
      onClose={onClose}
      text={'About'}
    />
    <NavLink
      href={'/contacts'}
      icon={<EmailIcon />}
      onClose={onClose}
      text={'Contact'}
    />
  </>
);