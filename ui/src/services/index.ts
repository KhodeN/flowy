import { API_URL } from '../models/constants';

import { Api } from './Api';

export type { Api } from './Api';

const api = new Api(API_URL);

export function useApi() {
   return api;
}
