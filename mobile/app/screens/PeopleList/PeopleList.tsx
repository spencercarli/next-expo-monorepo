import { SafeAreaView, ScrollView, Text, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { AppStackParamList } from "navigation/AppStack";
import { usePeople } from "shared/hooks";
import { getIdFromUrl } from "shared/utils";

type PeopleListProps = NativeStackScreenProps<AppStackParamList, "PeopleList">;

export const PeopleList = ({ navigation }: PeopleListProps) => {
  const { data, isLoading, isError } = usePeople();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        {isLoading && <Text>Loading...</Text>}
        {isError && <Text>Error...</Text>}
        {data?.results.map((person) => (
          <TouchableOpacity
            key={person.url}
            onPress={() =>
              navigation.navigate("Person", { id: getIdFromUrl(person.url) })
            }
          >
            <Text style={{ padding: 10, marginVertical: 5 }}>
              {person.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
