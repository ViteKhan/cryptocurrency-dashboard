import { FC } from 'react';
import { useTheme } from '@mui/material/styles';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';

import { Card } from '../../Card';
import { Loader } from '../../Loader';
import { useGetExchanges } from './Exchanges-hooks';

export const Exchanges: FC = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetExchanges();

  if (isLoading) return <Loader/>;

  return (
    <Card
      text={'exchanges'}
      value={data.length}
      color={theme.palette.success.dark}
      icon={<CurrencyExchangeOutlinedIcon/>}
    />
  );
};