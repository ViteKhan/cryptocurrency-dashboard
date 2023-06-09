import { FC } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import { Grid, Typography } from '@mui/material';

const currentDate = new Date().toLocaleDateString('en-GB', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

export const DashboardHeader: FC = () => {
  const theme = useTheme();
  return (
    <Grid item width={'100%'}>
      <Typography color={theme.palette.text.primary} variant={'h6'} marginBottom={'10px'}>
        Overview
      </Typography>
        <Typography color={theme.palette.text.secondary} variant={'subtitle1'}>
          <span>{'Today:  '}</span>
          <span
            style={{
              color: theme.palette.mode === 'dark' ? green[500] : theme.palette.success.dark,
              background: theme.palette.mode === 'dark' ? alpha(green[500], 0.1) : alpha(green[500], 0.2),
              padding: '5px 7px',
              borderRadius: '4px',
            }}
          >
            {currentDate}
          </span>
        </Typography>
    </Grid>
  );
};