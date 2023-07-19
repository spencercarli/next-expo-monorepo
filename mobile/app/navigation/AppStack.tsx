import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { PeopleList } from "screens/PeopleList";
import { Person } from "screens/Person";

export type AppStackParamList = {
  PeopleList: undefined;
  Person: {
    id: string;
  };
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PeopleList" component={PeopleList} />
      <Stack.Screen name="Person" component={Person} />
    </Stack.Navigator>
  );
};
