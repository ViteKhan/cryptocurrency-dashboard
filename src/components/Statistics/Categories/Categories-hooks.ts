import { useQuery } from 'react-query';

import { useApi } from 'API';

export const useGetCategories = () => {
  const api = useApi();

  return useQuery('categories', api.coinGecko.statistics.categories.get);
};