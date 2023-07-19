import { SafeAreaView, ScrollView, Text } from "react-native";

import { usePeople } from "shared/hooks";

export const PeopleList = () => {
  const { data, isLoading, isError } = usePeople();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        {isLoading && <Text>Loading...</Text>}
        {isError && <Text>Error...</Text>}
        {data?.results.map((person) => (
          <Text key={person.url}>{person.name}</Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
