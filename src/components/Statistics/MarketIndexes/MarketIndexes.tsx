import { FC } from 'react';
import { Card } from '../../Card';
import { useTheme } from '@mui/material/styles';
import BarChartIcon from '@mui/icons-material/BarChart';

export const MarketIndexes: FC = () => {
  const theme = useTheme();

  return (
    <Card
      text={'market indexes'}
      value={20}
      color={theme.palette.primary.main}
      icon={<BarChartIcon/>}
    />
  );
};