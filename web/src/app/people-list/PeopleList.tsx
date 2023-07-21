import Link from 'next/link';

import { getPeople } from 'shared/hooks/getPeople';
import { getIdFromUrl } from 'shared/utils';

export const PeopleList = async () => {
  const data = await getPeople();

  return (
    <ul>
      {data?.results.map((person) => (
        <Link key={person.url} href={`/person/${getIdFromUrl(person.url)}`}>
          <li style={{ padding: 10 }}>{person.name}</li>
        </Link>
      ))}
    </ul>
  );
};
