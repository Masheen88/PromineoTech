import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

//hooks - need to access state or lifecycle method inside a functional component but do not need to refactor it to a class component

//state hook - allows you to use state inside a functional component
export default function App() {
  /*
  Name of the state variable = isThisOn is a boolean. 
  Name of the modifier for the variable = setIsItOn is a method that will update the state property.
  */

  //UserState(false) - false is the default parameter in this example
  const [isThisOn, setIsItOn] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const moreFont = {
    fontSize: 24,
  };

  //Use Effect - takes another function as an argument. It is called anytime the functional component is rendered
  useEffect(() => {
    //Sets the browser's 'TITLE' to 'ON' or 'OFF' dependong on the isThisOn function
    document.title = isThisOn ? "ON" : "OFF";
  });

  return (
    <div>
      <p>{isThisOn ? "Yes, it is one!" : "OFF"}</p>
      <button
        onClick={() => {
          setIsItOn(!isThisOn);
          setClickCount(clickCount + 1);
        }}
      >
        Click Me! <br />I have been click{" "}
        <strong style={moreFont}>{clickCount}</strong> Times!
      </button>
    </div>
  );
}
