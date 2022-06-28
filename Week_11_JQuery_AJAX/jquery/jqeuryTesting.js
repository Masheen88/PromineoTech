/*
document.getElementById or any get element methods can be used to
get an element
*/
/*
Jquery allows the JS to be much simpler.
*/

//----to install Jquery
//npm init
//npm i jquery

//Obtain a body element.
console.log($("body"));

/*
Jquery can select elements from the DOM using CSS selectors such as class names,id's, and tag names. Jqery uses the format $("")
*/

/*
Jquery does not return the same as document.get. It instead returns the elmeent wrapped inside a jquery object. with built in methods to interact with it in the DOM.
*/
let p = $("#jTest");
let div = $(".my-classTest");
let ul = $("ul");

console.log("1. P id:", p);
console.log("2. div class:", div);
console.log("3. ul tag:", ul);

//gets text from p variable and since .text() is blank it will directly return the text from variable p.
console.log("4. Returns p.text jquery method:", p.text());
//Sets new text to variable p.
p.text("5. New Text");
//Writes data into the input tag using jquery .val method.
// $("input").val("New Value");

//Access the placeholder attribute in the text field
$("input").attr("placeholder", "6. Text added with jquery");

//Add an element to the DOM

//.prepend - adds content to an existing element after the beginning

div.prepend("<p>7. Prepended paragraph test with jquery</p>"); //Adds a new paragraph elements with text.

//.append - adds content to an existing element at the end

div.append("<p>8. Appended paragraph test with jquery</>");

//.before - adds elements or content immediately before an existing element
div.before("<p>9. Paragraph added immediately before the div with jquery</>");

//.after - adds elements or content immediately after an existing element
div.after("<p>10. Paragraph added immediately after the div with jquery</>");

//.empty - removes the chilren of the selected element from the DOM
div.empty(); // removes all jquery methods uses to add to the original Div above.

//.remove - deletes the elements and all children from the DOM
ul.remove(); // removed the ul lists.

//.hide - allows you to hide an element

//Hides the input field on index.html
$("input").hide();

//.show - allows you to display(show) an element

//Displays the input field on index.html after 1500 ms
setTimeout(() => $("input").show(), 1500);
