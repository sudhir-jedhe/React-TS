import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Shuffler2D from "./components/Shuffler2D";
import Shuffler1D from "./components/Shuffler1D";
import Stagger from "./components/Stagger";
import Timer from "./components/Timer";
import List from "./components/List";
import Scroll from "./components/Scroll";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="shuffler-1D" element={<Shuffler1D />} />
          <Route path="shuffler-2D" element={<Shuffler2D />} />
          <Route path="stagger" element={<Stagger />} />
          <Route path="timer" element={<Timer />} />
          <Route path="list" element={<List />} />
          <Route path="scroll" element={<Scroll />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
