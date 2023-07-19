import { type ReactNode } from "react";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
