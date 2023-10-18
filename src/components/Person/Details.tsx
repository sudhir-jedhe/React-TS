import React from "react";

function Details(props) {
  const { person } = props;
  return (
    <div className="personDetail">
      <p>First Name: {person.fName}</p>
      <p>Last Name: {person.lName}</p>
    </div>
  );
}

export default Details;
