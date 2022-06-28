/*
Template literals enchance the way strings can be worked with by adding additional features.
They are declared just like strings with backticks ` ` (left of the !
*/

//ie. It will honor spaces in a string.
let myString = `my String = 

Hello world 


my name's Matt.

`;

// \n allows you to create a name line. Very similar to a line break <br> in html.
console.log(myString);

let newString = `New String = \nHello\nworld\nmy\nname's\nMatt.`;

console.log(newString);

/*
You can interpolate or execute code inside a string which allows it to be much more dynamic.
This is done by wrapping something in curly braces and a $. ${}
*/
console.log(`Interpolation of code: Six times five - ${10 * 3}`);

countSheeps([true, false, false, true, true]);

function countSheeps(arrayofsheeps) {
  return console.log(arrayofsheeps.filter(Boolean));
}
