// import React from "react";
import { useState, useEffect} from 'react'
// import "./App.css";
// import UseState from "./components/UseState";
// import UseEffect from "./components/UseEffect";
// import UseEffectFetch from "./components/UseEffectFetch";
// import Form from "./components/Form";
// import LifeState from "./components/LiftState";
// import TodoList from "./components/ToDoList/TodoList";
// import Counter from "./components/Counter/Counter";
// import Person from "./components/Person/Person";
// import Array from "./components/ArrayC/Array";
// import Parent from "./components/ParentChild/Parent";
// import Fetch from "./components/Fetch";
// import UserList from "./components/Fetch/UserList";

// interface Iperson {
//   name: string;
//   fName: string;
//   lName: string;
// }

// function A() {
//   console.log('A')
//   return <B/>
// }

// function B() {
//   console.log('B')
//   return <C/>
// }

// function C() {
//   console.log('C')
//   return null
// }

// function D() {
//   console.log('D')
//   return null
// }

// function App() {
//   const [state, setState] = useState(0)
//   useEffect(() => {
//     setState(state => state + 1)
//   })
//   console.log('App')
//   return (
//     <div className="appContainer">
//       {/* <UserList />
//       <Fetch />
//       <Parent />
//       <Array />
//       <Person /> */}
//       {/* <Counter /> */}
//       {/* <TodoList /> */}
//       <h1>Hi This is Sudhir</h1>
//       <A state={state}/>
//       <D/>
//     </div>
//   );

//   // return (
//   //   <div>
//   //     <LifeState />
//   //     <Form />
//   //     <UseEffectFetch />
//   //     <UseState />
//   //     <UseEffect />
//   //   </div>
//   // );
// }

import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'



// utils
const on = (obj, ...args) => obj.addEventListener(...args);
const off = (obj, ...args) => obj.removeEventListener(...args);

const useBattery = () => {
  const [state, setState] = useState({});
  let mounted = true;
  let battery = null;

  const onChange = () => {
    const { charging, level, chargingTime, dischargingTime } = battery;
    setState({
      charging,
      level,
      chargingTime,
      dischargingTime
    });
  };

  const onBattery = () => {
    onChange();
    on(battery, "chargingchange", onChange);
    on(battery, "levelchange", onChange);
    on(battery, "chargingtimechange", onChange);
    on(battery, "dischargingtimechange", onChange);
  };

  useEffect(() => {
    navigator.getBattery().then(bat => {
      if (mounted) {
        battery = bat;
        onBattery();
      }
    });

    return () => {
      mounted = false;
      if (battery) {
        off(battery, "chargingchange", onChange);
        off(battery, "levelchange", onChange);
        off(battery, "chargingtimechange", onChange);
        off(battery, "dischargingtimechange", onChange);
      }
    };
  }, [0]);

  return state;
};

function App() {
  const state = useBattery();

  return <pre>{JSON.stringify(state, null, 2)}</pre>;
}

export default App;
