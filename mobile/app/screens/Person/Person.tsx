import { SafeAreaView, Text, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { usePerson } from 'shared/people/usePerson';

import { AppStackParamList } from 'navigation/AppStack';
import { Loading, ErrorBoundary } from 'components/ui';

type PersonProps = NativeStackScreenProps<AppStackParamList, 'Person'>;

export const Person = ({ route }: PersonProps) => {
  const { isLoading, isError, data, error, refetch } = usePerson(
    route.params.id,
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        {isLoading && <Loading />}
        {isError && <ErrorBoundary error={error} reset={refetch} />}

        <Text>{JSON.stringify(data, null, 2)}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};
