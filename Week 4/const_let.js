//ECMA Script a standard for javascript to follow.
//ES6 gives two additional variables to declare a variable ie. var

/*
let - allows you to declare a variable that only exists within a block scope
at the end of the block where the variable was declared ie. loop, statement, function, etc..
*/

//It allows you to use the same variable in a block that would normally override a variable with the same name.
//X = 10
var x = 10;
{
  //only in this block does x = 2
  //if var had been used, it would have equaled 10.
  let x = 2;
}
//x out of the block above still equals 10.

/*
const - allows you to createa  constant value. It cannot be changed once set. 
for example pi.
*/

const pi = 3.14159;
console.log(pi);

//This will display an error because you are trying to change a const variable after it has been declared.
pi = 6;

console.log(pi);
