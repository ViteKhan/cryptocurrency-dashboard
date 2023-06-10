import { FC } from 'react';
import { useTheme } from '@mui/material/styles';
import PieChartIcon from '@mui/icons-material/PieChart';

import { Card } from '../../Card';
import { Loader } from '../../Loader';
import { useGetAssetPlatforms } from './AssetPlatforms-hooks';

export const AssetPlatforms: FC = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetAssetPlatforms();

  if (isLoading) return <Loader/>;

  return (
    <Card
      text={'asset platforms'}
      value={data.length}
      color={theme.palette.warning.dark}
      icon={<PieChartIcon/>}
    />
  );
};