import { Global } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Container } from "src/containers/Container";
import { normalization } from "src/styles/normalization";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export function App() {
  return (
    <>
      <Global styles={normalization} />
      <QueryClientProvider client={queryClient}>
        <Container />
      </QueryClientProvider>
    </>
  );
}
