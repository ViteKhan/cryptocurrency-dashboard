import { FC, ReactNode } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

interface NavLinkProps {
  href: string;
  icon: ReactNode;
  text: string;
  onClose: () => void;
}

export const NavLink: FC<NavLinkProps> = ({ href, text, icon, onClose }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const onClick = () => {
    navigate(href);
    onClose();
  };

  return (
    <Button
      color={'primary'}
      onClick={onClick}
      size={'small'}
      variant={'text'}
      sx={{
        color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : theme.palette.primary.main,
        fontSize: theme.typography.subtitle1,
        fontWeight: 'medium',
        textTransform: 'none',
        '&:active': {
          color: theme.palette.mode === 'dark' ? theme.palette.primary.contrastText : theme.palette.primary.dark,
        },
        '&:hover': {
          color: theme.palette.mode === 'dark' ? theme.palette.primary.contrastText : theme.palette.primary.dark,
        },
        '& svg': {
          mr: 0.5
        },
      }}
    >
      {icon} {text}
    </Button>
  );
};