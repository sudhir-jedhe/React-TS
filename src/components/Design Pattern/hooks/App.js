import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import BeerList from "./BeerList";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BeerList />
  </StrictMode>
);
