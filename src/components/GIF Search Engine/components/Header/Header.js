import React, { Fragment } from "react";

const Header = ({ title = "GIFS" }) => {
  return (
    <Fragment>
      <h2>{title}</h2>
    </Fragment>
  );
};

export default Header;
