import { useQuery } from 'react-query';

import { swapi } from '../api/swapi';

import type { Person } from './types';

export const usePerson = (id: string) => {
  return useQuery({
    queryKey: ['person', id],
    queryFn: async (): Promise<Person> => {
      const { data } = await swapi.get(`/people/${id}`);
      return data;
    },
  });
};
