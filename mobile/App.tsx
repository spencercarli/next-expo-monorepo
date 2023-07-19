import { SafeAreaView } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";

import { PeopleList } from "./PeopleList";

const queryClient = new QueryClient();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <PeopleList />
      </QueryClientProvider>
    </SafeAreaView>
  );
}
