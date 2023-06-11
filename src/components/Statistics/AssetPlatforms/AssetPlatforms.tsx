import { FC } from 'react';
import { useTheme } from '@mui/material/styles';
import PieChartIcon from '@mui/icons-material/PieChart';

import { Card } from '../../Card';
import { useGetAssetPlatforms } from './AssetPlatforms-hooks';

export const AssetPlatforms: FC = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetAssetPlatforms();

  return (
    <Card
      text={'asset platforms'}
      value={data?.length || 0}
      color={theme.palette.warning.dark}
      icon={<PieChartIcon/>}
      isLoading={isLoading}
    />
  );
};