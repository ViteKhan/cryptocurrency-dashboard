import { APIResource } from './interfaces';

export class CoinGeckoService extends APIResource {
  statistics = {
    assetPlatforms: {
      get: () => this._provider.get('/asset_platforms'),
    },
    categories: {
      get: () => this._provider.get('/coins/categories/list'),
    },
    exchanges: {
      get: () => this._provider.get('/exchanges'),
    },
    marketIndexes: {
      get: () => this._provider.get('/indexes'),
    },
  };
  coinsMarket = {
    get: (page: number, perPage: number) => {
      return this._provider.get(`/coins/markets?vs_currency=USD&order=market_cap_desc
      &per_page=${perPage}&page=${page}&sparkline=false`);
    },
  };
}