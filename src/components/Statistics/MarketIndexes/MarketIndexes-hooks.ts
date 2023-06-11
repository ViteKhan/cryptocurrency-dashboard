import { useQuery } from '@tanstack/react-query';

import { useApi } from 'API';

export const useGetMarketIndexes = () => {
  const api = useApi();

  return useQuery({ queryKey: ['market-indexes'], queryFn: api.coinGecko.statistics.marketIndexes.get });
};