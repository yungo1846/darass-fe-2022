import { Global } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MainPage } from "src/pages/MainPage";
import { ReplyModuleProvider } from "src/contexts/ReplyModuleContext";
import { normalization } from "src/styles/normalization";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { OauthSuccessPage } from "./OauthSuccessPage";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/oauth/success",
    element: <OauthSuccessPage />,
  },
]);

export function App() {
  return (
    <>
      <Global styles={normalization} />
      <ReplyModuleProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ReplyModuleProvider>
    </>
  );
}
