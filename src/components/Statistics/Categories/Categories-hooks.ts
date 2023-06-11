import { useQuery } from '@tanstack/react-query';

import { useApi } from 'API';

export const useGetCategories = () => {
  const api = useApi();

  return useQuery({ queryKey: ['categories'], queryFn: api.coinGecko.statistics.categories.get });
};