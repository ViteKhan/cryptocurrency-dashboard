import { useQuery } from 'react-query';

import { useApi } from 'API';

export const useGetMarketIndexes = () => {
  const api = useApi();

  return useQuery('market-indexes', api.coinGecko.statistics.marketIndexes.get);
};