import { ScrollView, Text } from "react-native";

import { usePeople } from "shared/hooks";

export const PeopleList = () => {
  const { data, isLoading, isError } = usePeople();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error...</Text>;
  }

  return (
    <ScrollView>
      {data?.results.map((person) => (
        <Text key={person.url}>{person.name}</Text>
      ))}
    </ScrollView>
  );
};
