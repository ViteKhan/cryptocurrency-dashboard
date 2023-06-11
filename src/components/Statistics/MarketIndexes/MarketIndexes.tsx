import { FC } from 'react';
import { useTheme } from '@mui/material/styles';
import BarChartIcon from '@mui/icons-material/BarChart';

import { Card } from '../../Card';
import { useGetMarketIndexes } from './MarketIndexes-hooks';

export const MarketIndexes: FC = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetMarketIndexes();

  return (
    <Card
      text={'market indexes'}
      value={data?.length || 0}
      color={theme.palette.primary.main}
      icon={<BarChartIcon/>}
      isLoading={isLoading}
    />
  );
};