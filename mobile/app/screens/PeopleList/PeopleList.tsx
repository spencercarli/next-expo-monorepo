import { SafeAreaView, ScrollView, Text, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppStackParamList } from 'navigation/AppStack';
import { usePeople } from 'shared/people/usePeople';
import { getIdFromUrl } from 'shared/utils';
import { Loading, ErrorBoundary } from 'components/ui';

type PeopleListProps = NativeStackScreenProps<AppStackParamList, 'PeopleList'>;

export const PeopleList = ({ navigation }: PeopleListProps) => {
  const { data, isLoading, isError, error, refetch } = usePeople();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        {isLoading && <Loading />}
        {isError && <ErrorBoundary error={error} reset={refetch} />}
        {data?.results.map((person) => (
          <TouchableOpacity
            key={person.url}
            onPress={() =>
              navigation.navigate('Person', { id: getIdFromUrl(person.url) })
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
