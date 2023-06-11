import { FC } from 'react';
import { useTheme } from '@mui/material/styles';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';

import { Card } from '../../Card';
import { useGetExchanges } from './Exchanges-hooks';

export const Exchanges: FC = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetExchanges();

  return (
    <Card
      text={'exchanges'}
      value={data?.length || 0}
      color={theme.palette.success.dark}
      icon={<CurrencyExchangeOutlinedIcon/>}
      isLoading={isLoading}
    />
  );
};