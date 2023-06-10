import axios, { AxiosRequestConfig, Method } from 'axios';

export type RequestParams = AxiosRequestConfig['params'];

export class DataProvider {
  private _rootUrl: string;
  constructor(rootUrl: string) {
    this._rootUrl = rootUrl;
  }

  #getBaseUrl = (url: string) => `${this._rootUrl}${url}`;

  #getHeaders = () => {
    return { 'Accept': 'application/json' };
  };

  #request = async (requestUrl: string, params: RequestParams) => {
    let url = this.#getBaseUrl(requestUrl);

    return await axios({ url, ...params, headers: this.#getHeaders() })
      .then(response => response.data)
      .catch((e) => {
        throw new Error('Something went wrong: ' + e.message);
      });
  };

  get = (url: string, params?: RequestParams) => {
    const requestParams = {
      options: { method: 'GET' as Method },
      params,
    };

    return this.#request(url, requestParams);
  };
}