import React, { Component } from "react";
import DropDown from "./index";
// Uncontrolled Component
class DropDownTest extends Component {
  onChange = (isOpen) => {
    console.log(isOpen);
  };

  render() {
    return <DropDown isOpen={true} onChange={this.onChange} />;
  }
}

export default DropDownTest;
