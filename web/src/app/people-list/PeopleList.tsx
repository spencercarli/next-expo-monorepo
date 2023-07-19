"use client";

import { usePeople } from "shared/hooks";

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
        <li key={person.url}>{person.name}</li>
      ))}
    </ul>
  );
};
