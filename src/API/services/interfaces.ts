import { DataProvider } from '../DataProvider';

export class APIResource {
  protected _provider: DataProvider;

  constructor(provider: DataProvider) {
    this._provider = provider;
  }
}