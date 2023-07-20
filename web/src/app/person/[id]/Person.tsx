"use client";

import { usePerson } from "shared/hooks";

type PersonProps = {
  params: { id: string };
};

export const Person = ({ params }: PersonProps) => {
  const { isLoading, isError, data } = usePerson(params.id);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error...</p>;
  }

  return (
    <pre>
      <code>{JSON.stringify(data, null, 2)}</code>
    </pre>
  );
};
