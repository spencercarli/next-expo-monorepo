import { useQuery } from 'react-query';

import { getPerson } from './getPerson';

export const usePerson = (id: string) => {
  return useQuery({
    queryKey: ['person', id],
    queryFn: () => getPerson(id),
  });
};
