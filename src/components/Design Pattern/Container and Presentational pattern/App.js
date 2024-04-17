import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Beer from "./Beer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Beer />
  </StrictMode>
);
