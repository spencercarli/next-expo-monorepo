import { swapi } from '../api/swapi';

import type { Person } from './types';

type Response = {
  count: number;
  next: null | string;
  previous: null | string;
  results: Person[];
};

export const getPeople = async (): Promise<Response> => {
  const { data } = await swapi.get('/people');

  return data;
};
