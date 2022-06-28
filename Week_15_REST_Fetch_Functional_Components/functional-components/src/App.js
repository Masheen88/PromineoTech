import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Person name="Matthew" age="123" />
      <Person name="Test" age="456" />
    </div>
  );
}

//Functional Component Example
//Props can be directly passed into a functional component too.
const Person = (props) => {
  const { name, age } = props;
  return (
    <div>
      <h1>Person Name: {name}</h1>
      <h3 onClick={DoSomething(...array)}>Person Age: {age}</h3>
      <div onClick={console.log(clone)}>Test:</div>
      <div onClick={console.log(clone)}>Update Test</div>
    </div>
  );
};
export default App;
const array = [5, 6, 7];
const object = {
  name: "matt",
  value1: 1,
  value2: 2,
};

const clone = { ...object, name: "newMatt", value2: 3 };

const DoSomething = (a, b, c) => {
  console.log(a, b, c);
};
