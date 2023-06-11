import { useQuery } from '@tanstack/react-query';
import { useApi } from 'API';

export const useGetCoins = () => {
  const api = useApi();

  return useQuery({ queryKey: ['coins'], queryFn: api.coinGecko.coinsMarket.get });
};