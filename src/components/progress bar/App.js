import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ProgressBar from "./Components/ProgressBar";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <div className="abc">
    <ProgressBar size="lg" visible={true} percentage={80} />
  </div>,
  document.getElementById("root")
);
