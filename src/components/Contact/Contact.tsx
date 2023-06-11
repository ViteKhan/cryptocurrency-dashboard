import { FC, ReactNode } from 'react';
import { Avatar, Box, Card, CardContent, Link, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface ContactProps {
  link: string;
  color: string;
  icon: ReactNode;
  title: string;
}

export const Contact: FC<ContactProps> = ({ icon, link, color, title }) => {
  const theme = useTheme();
  return (
    <Link
      href={link}
      target={'_blank'}
      rel={'noopener'}
      sx={{ textDecoration: 'none' }}
    >
      <Card
        sx={{
          maxWidth: '400px',
          borderRadius: '4px',
          padding: '16px',
          '&:hover': {
            background: theme.palette.mode === 'dark' ? theme.palette.text.secondary : theme.palette.primary.light,
          },
        }}>
        <CardContent
          sx={{
            padding: 0,
            '&:last-child': {
              paddingBottom: '0px',
            },
          }}
        >
          <Box
            sx={{
              cursor: 'pointer',
              display: 'flex',
              gap: '16px',
              alignItems: 'center',
            }}
          >
            <Avatar
              sx={{
                backgroundColor: color,
                height: 40,
                width: 40,
                color: theme.palette.common.white,
              }}
            >
              {icon}
            </Avatar>
            <Typography
              color={theme.palette.mode === 'dark' ? theme.palette.text.secondary : theme.palette.primary.main}
            >{title}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
};