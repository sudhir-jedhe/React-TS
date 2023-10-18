                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          import React, { useState, ChangeEvent } from "react";

interface Props {
  name: string;
  onSetName: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Name: React.FC<Props> = ({ name, onSetName }) => {
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input id="name" value={name} type="text" onChange={onSetName} />
    </div>
  );
};

interface Props {
  animal: string;
  onSetAnimal: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Animal: React.FC<Props> = ({ animal, onSetAnimal }) => {
  return (
    <div>
      <label htmlFor="animal"></label>
      <input id="animal" value={animal} type="text" onChange={onSetAnimal} />
    </div>
  );
};

interface DisplayNameProps {
  name: string;
  animal: string;
}

const DisplayName: React.FC<DisplayNameProps> = ({ name, animal }) => {
  return <p>{`Hi ${name}, I Like animal ${animal}`}</p>;
};

function LifeState() {
  const [name, setName] = useState("");
  const [animal, setAnimal] = useState("");

  return (
    <div>
      <Name 
        name={name} 
        onSetName={(event) => setName(event.target.value)} 
        animal={""} 
        onSetAnimal={function (event: React.ChangeEvent<HTMLInputElement>): void {
          throw new Error("Function not implemented.");
      } } />
      <Animal
        animal={animal}
        onSetAnimal={(event) => setAnimal(event.target.value)} 
        name={""} 
         onSetName={function (event: React.ChangeEvent<HTMLInputElement>): void {
          throw new Error("Function not implemented.");
        } }      />
      <DisplayName name={name} animal={animal} />
    </div>
  );
}

export default LifeState;
