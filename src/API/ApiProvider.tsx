import { createContext, FC, ReactNode, useContext } from 'react';

import { CoinGeckoService, GithubService } from './services';
import { DataProvider } from './DataProvider';

class ApiProvider {
  private readonly _coinGeckoProvider: DataProvider;
  private readonly _gitHubProvider: DataProvider;
  private readonly _services: {
    coinGecko: CoinGeckoService;
    github: GithubService;
  };

  constructor(coinGeckoProvider: DataProvider,  gitHubProvider: DataProvider) {
    this._coinGeckoProvider = coinGeckoProvider;
    this._gitHubProvider = gitHubProvider;

    this._services = {
      coinGecko: new CoinGeckoService(this._coinGeckoProvider),
      github: new GithubService(this._gitHubProvider),
    };
  }
  public getServices = () => this._services;
}

const coinGeckoProvider = new DataProvider('https://api.coingecko.com/api/v3');
const gitHubProvider = new DataProvider('https://api.github.com/repos');

const apiProvider = new ApiProvider(coinGeckoProvider, gitHubProvider);

export const ApiContextProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <ApiContext.Provider value={apiProvider}>
    {children}
  </ApiContext.Provider>
);

const ApiContext = createContext<ApiProvider>({} as ApiProvider);

export const useApi = () => {
  const api = useContext(ApiContext);
  return api.getServices();
};