import { useQuery } from 'react-query';

import { getPeople } from './getPeople';

export const usePeople = () => {
  return useQuery({
    queryKey: 'people',
    queryFn: getPeople,
  });
};
