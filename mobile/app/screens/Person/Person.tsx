import { SafeAreaView, Text, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { usePerson } from 'shared/people/usePerson';

import { AppStackParamList } from 'navigation/AppStack';

type PersonProps = NativeStackScreenProps<AppStackParamList, 'Person'>;

export const Person = ({ route }: PersonProps) => {
  const { isLoading, isError, data } = usePerson(route.params.id);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        {isLoading && <Text>Loading...</Text>}
        {isError && <Text>Error...</Text>}

        <Text>{JSON.stringify(data, null, 2)}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};
