import { FC } from 'react';
import { Card } from '../../Card';
import { useTheme } from '@mui/material/styles';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';

export const Exchanges: FC = () => {
  const theme = useTheme();

  return (
    <Card
      text={'exchanges'}
      value={10}
      color={theme.palette.success.dark}
      icon={<CurrencyExchangeOutlinedIcon/>}
    />
  );
};