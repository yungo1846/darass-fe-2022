import { Global } from "@emotion/react";
import { Container } from "src/components/Container";
import { normalization } from "src/styles/normalization";

export function App() {
  return (
    <>
      <Global styles={normalization} />
      <Container></Container>
    </>
  );
}
