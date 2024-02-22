import React from "react";

const Header = ({ title = "Welcome" }) => {
  return (
    <div
      style={{
        borderBottom: "1px solid gray",
        marginBottom: "1rem",
        position: "sticky",
        top: "0px",
        zIndex: 9,
        backgroundColor: "white",
      }}
    >
      <h3 style={{ textAlign: "left" }}>{title}</h3>
    </div>
  );
};

export default Header;
