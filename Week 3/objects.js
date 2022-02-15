console.log("***equality.js begin***");

//Object literal - with various properties to describe the object.
//Function is a standaloone piece of functionality
//Method is a function that belongs to an object
//last property does not need a comma ,
//This allows you to keep multiple variable within the object instead of having multiple variables in code.

//dvdPlayer in this example is the object.
var dvdPlayer = {
  //Example of variables within an object.
  height: 3,
  width: 18,
  depth: 12,
  weight: 7,
  color: "black",
  dvdName: "Aladdin",
  //function can be used in an object and then call outside of the object.
  printDVDName: function () {
    //this. refers to the object itself since it is not outside of the object.
    console.log(this.dvdName);
  },
};

//Dot Notation
//Put the identifier or variable name and you can then access the variables within that

console.log(dvdPlayer.depth);
//Call the function from the dvdPlayer object example
dvdPlayer.printDVDName();
