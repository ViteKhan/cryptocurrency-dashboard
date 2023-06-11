import { useQuery } from '@tanstack/react-query';

import { useApi } from 'API';

export const useGetAssetPlatforms = () => {
  const api = useApi();

  return useQuery({ queryKey: ['asset-platforms'], queryFn: api.coinGecko.statistics.assetPlatforms.get });
};