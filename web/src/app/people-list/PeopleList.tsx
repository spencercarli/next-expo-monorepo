"use client";

import Link from "next/link";

import { usePeople } from "shared/hooks";
import { getIdFromUrl } from "shared/utils";

export const PeopleList = () => {
  const { data, isLoading, isError } = usePeople();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error...</p>;
  }

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
