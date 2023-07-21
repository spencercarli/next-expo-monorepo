import { getPerson } from 'shared/people/getPerson';

type PersonProps = {
  params: { id: string };
};

export const Person = async ({ params }: PersonProps) => {
  const data = await getPerson(params.id);

  return (
    <pre>
      <code>{JSON.stringify(data, null, 2)}</code>
    </pre>
  );
};
