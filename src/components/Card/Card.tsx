import { FC, ReactNode } from 'react';
import { Avatar, Card as MuiCard, CardContent, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface CardProps {
  text: string;
  value: number;
  color: string;
  icon: ReactNode;
}

export const Card: FC<CardProps> = ({ text, icon, color, value }) => {
  const theme = useTheme();

  return (
    <MuiCard>
      <CardContent
        sx={{
          padding: '16px',
          borderRadius: '4px',
        }}
      >
        <Grid container justifyContent={'space-between'} alignItems={'center'}>
          <Grid item>
            <Typography variant='subtitle1' color={theme.palette.text.secondary}>
              {text.toUpperCase()}
            </Typography>
            <Typography variant='subtitle1' color={theme.palette.text.primary}>
              {value}
            </Typography>
          </Grid>
          <Grid item>
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
          </Grid>
        </Grid>
      </CardContent>
    </MuiCard>
  );
};