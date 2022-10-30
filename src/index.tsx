import { createRoot } from "react-dom/client";

function Test() {
  return <div>hihi</div>;
}

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container); // createRoot(container!) if you use TypeScript

  root.render(<Test />);
}
