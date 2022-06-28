import React from "react";

//Allows us to write to the dom in react
import ReactDOM from "react-dom";

let element = React.createElement("h1", {}, "This is a React test!");
//Takes the app ID from index.html and redner the element created above.
ReactDOM.render(element, document.getElementById("app"));

/*
createElement method takes 3 arguments.
1. element tags
2. props
3. content or 'children' of the rendered element.
*/
