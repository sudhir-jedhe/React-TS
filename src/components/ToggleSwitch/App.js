import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ToggleSwitch from "./Components/ToggleSwitch";
import * as serviceWorker from "./serviceWorker";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

ReactDOM.render(
  <div className="abc">
    <ToggleSwitch name="abc" rounded={true} />
    <ToggleSwitch name="abc" variant="success" />
    <ToggleSwitch
      name="abc"
      rounded={true}
      variant="danger"
      defaultChecked={true}
      checkedChildren={<CheckOutlined />}
      uncheckedChildren={<CloseOutlined />}
    />
    <ToggleSwitch
      name="abc"
      defaultChecked={true}
      variant="danger"
      checkedChildren={<CheckOutlined />}
      uncheckedChildren={<CloseOutlined />}
    />
  </div>,
  document.getElementById("root")
);
