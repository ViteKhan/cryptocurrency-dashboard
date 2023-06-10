import { FC } from 'react';
import { Card } from '../../Card';
import { useTheme } from '@mui/material/styles';
import PieChartIcon from '@mui/icons-material/PieChart';

export const AssetPlatforms: FC = () => {
  const theme = useTheme();

  return (
    <Card
      text={'asset platforms'}
      value={5}
      color={theme.palette.warning.dark}
      icon={<PieChartIcon/>}
    />
  );
};