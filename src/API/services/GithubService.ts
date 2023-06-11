import { APIResource } from './interfaces';

export class GithubService extends APIResource {
  getRepoStats = () => this._provider.get('/ViteKhan/cryptocurrency-dashboard/languages');
}