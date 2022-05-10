import React from "react";
import "./App.css";
import ReactTest, { Component } from "react"; //You can react multiple things for the destructured variables.

function App() {
  return (
    <div className="App">
      <Person name="Matthew" age="34" />
    </div>
  );
}

//Functional Component Example
//Props can be directly passed into a functional component too.
const Person = (props) => {
  const { name, age } = props;
  return (
    <div>
      <h1>
        My Name: {name} | My Age: {age}
      </h1>
      <h3 onClick={DoSomething()}>Do Something - Check Console</h3>
    </div>
  );
};
export default App;

//Destructuring

const DoSomething = () => {
  const array = [3, 5, 7, 9];
  const object = {
    propertyOne: "p-one",
    propertyTwo: "p-two",
    propertyThree: "p-three",
  };

  //by position assigns values in the array to a & b.
  const [a, b, c] = array;

  console.log("array position a", a);
  console.log("array position b", b);
  console.log("array position c", c);

  let { propertyOne, propertyTwo, propertyThree } = object;
  console.log("propertyOne", propertyOne);
  console.log("propertyTwo", propertyTwo);
  console.log("propertyThree", propertyThree);
};
