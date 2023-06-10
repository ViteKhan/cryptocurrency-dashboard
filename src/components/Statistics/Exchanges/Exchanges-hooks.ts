import { useQuery } from 'react-query';

import { useApi } from 'API';

export const useGetExchanges = () => {
  const api = useApi();

  return useQuery('exchanges', api.coinGecko.statistics.exchanges.get);
};