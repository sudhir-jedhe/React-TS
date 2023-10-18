import React, { useState } from "react";
import InputContainer from "./InputContainer";
import Details from "./Details";
import "./style.css";

function Person() {
  const [person, setPerson] = useState({
    fName: "Sudhir",
    lName: "Jedhe",
    Age: 34,
  });

  const onChangeFName = (e) => {
    // setPerson({ ...person, fName: e.target.value });
    setPerson((currentPerson) => {
      return { ...currentPerson, fName: e.target.value };
    });
  };
  const onChangeLName = (e) => {
    setPerson({ ...person, lName: e.target.value });
  };
  return (
    <div className="person">
      <InputContainer
        onChangeFName={onChangeFName}
        onChangeLName={onChangeLName}
      />
      <Details person={person} />
    </div>
  );
}

export default Person;
