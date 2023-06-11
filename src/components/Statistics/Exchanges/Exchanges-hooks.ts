import { useQuery } from '@tanstack/react-query';

import { useApi } from 'API';

export const useGetExchanges = () => {
  const api = useApi();

  return useQuery({ queryKey: ['exchanges'], queryFn: api.coinGecko.statistics.exchanges.get });
};