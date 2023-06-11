import { FC } from 'react';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { PieChart } from 'components/PieChart';

export const About: FC = () => {
  const theme = useTheme();

  return (
    <>
      <Typography color={theme.palette.text.primary} variant={'h6'} marginBottom={'10px'}>
        Project review
      </Typography>
      <PieChart/>
    </>
  );
};