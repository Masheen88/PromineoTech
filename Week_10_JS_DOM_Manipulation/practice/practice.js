let button = document.getElementById("btn");
let content = document.getElementById("content");

button.addEventListener("click", () => {
  if (content.innerHTML == "Goodbye") {
    content.innerHTML = "Hello";
  } else {
    content.innerHTML = "Goodbye";
  }
});

// document.getElementById("content").innerHTML = "Goodbye."; //Represents the text inside the opening/clossing tags of an elements.

//Removes a single element from the DOM
document.getElementById("remove").addEventListener("click", () => {
  let idToRemove = document.getElementById("remove-id").value;
  let elementToRemove = document.getElementById(idToRemove);
  elementToRemove.parentNode.removeChild(elementToRemove);
  document.getElementById("remove-id").value = "";
});

let id = 0;

//Adds a new paragraph with user input
document.getElementById("add").addEventListener("click", () => {
  let parent = document.getElementById("paragraphs");
  let newElement = document.createElement("p");
  newElement.innerHTML = document.getElementById("newText").value;
  newElement.setAttribute("id", id++);
  console.log("new par. id is:", id);
  parent.appendChild(newElement);
  //Resets the input field value to blank
  document.getElementById("newText").value = "";
});
