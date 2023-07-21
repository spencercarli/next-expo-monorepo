import { useQuery } from 'react-query';

import { swapi } from '../api/swapi';

import type { Person } from './types';

export const getPerson = async (id: string): Promise<Person> => {
  const { data } = await swapi.get(`/people/${id}`);
  return data;
};

export const usePerson = (id: string) => {
  return useQuery({
    queryKey: ['person', id],
    queryFn: () => getPerson(id),
  });
};
