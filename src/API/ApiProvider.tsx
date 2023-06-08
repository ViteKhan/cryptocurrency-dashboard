import { createContext, FC, ReactNode, useContext } from 'react';

import { CoingeckoService, GithubService } from './services';
import { DataProvider } from './DataProvider';

class ApiProvider {
  private readonly _coingeckoProvider: DataProvider;
  private readonly _gitHubProvider: DataProvider;
  private readonly _services: {
    coingecko: CoingeckoService;
    github: GithubService;
  };

  constructor(coingeckoProvider: DataProvider,  gitHubProvider: DataProvider) {
    this._coingeckoProvider = coingeckoProvider;
    this._gitHubProvider = gitHubProvider;

    this._services = {
      coingecko: new CoingeckoService(this._coingeckoProvider),
      github: new GithubService(this._gitHubProvider),
    };
  }
  public getServices = () => this._services;
}

const coingeckoProvider = new DataProvider('https://api.coingecko.com/api/v3');
const gitHubProvider = new DataProvider('https://api.github.com/repos');

const apiProvider = new ApiProvider(coingeckoProvider, gitHubProvider);

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