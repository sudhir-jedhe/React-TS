import React from "react";
import "./App.css";
import UseState from "./components/UseState";
import UseEffect from "./components/UseEffect";
import UseEffectFetch from "./components/UseEffectFetch";
import Form from "./components/Form";
import LifeState from "./components/LiftState";
import TodoList from "./components/ToDoList/TodoList";
import Counter from "./components/Counter/Counter";
import Person from "./components/Person/Person";
import Array from "./components/ArrayC/Array";
import Parent from "./components/ParentChild/Parent";
import Fetch from "./components/Fetch";
import UserList from "./components/Fetch/UserList";

interface Iperson {
  name: string;
  fName: string;
  lName: string;
}
function App() {
  return (
    <div className="appContainer">
      {/* <UserList />
      <Fetch />
      <Parent />
      <Array />
      <Person />
      <Counter /> */}
      <TodoList />
    </div>
  );

  // return (
  //   <div>
  //     <LifeState />
  //     <Form />
  //     <UseEffectFetch />
  //     <UseState />
  //     <UseEffect />
  //   </div>
  // );
}

export default App;
