"use client";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

import { PeopleList } from "./PeopleList";

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <PeopleList />
    </QueryClientProvider>
  );
}
