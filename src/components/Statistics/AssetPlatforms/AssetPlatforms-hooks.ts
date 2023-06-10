import { useQuery } from 'react-query';

import { useApi } from 'API';

export const useGetAssetPlatforms = () => {
  const api = useApi();

  return useQuery('asset-platforms', api.coinGecko.statistics.assetPlatforms.get);
};