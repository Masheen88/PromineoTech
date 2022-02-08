//Arrays

//Customer Data ie. CRM
//Prints out customer names using a loop. You can utilize any loop though the FOR Loop is common
console.log("- List of names using a FOR LOOP");
let customerNames = [];
customerNames.push("Matthew Cox");
customerNames.push("John Doe");

for (let i = 0; i < customerNames.length; i++) {
  console.log(customerNames[i]);
}

//For OF Loop
console.log("- List of names using a FOR OF LOOP");
for (name of customerNames) {
  console.log(name);
}

//Practice
//Array using an if statement and a FOR OF Loop
let pets = [];
pets.push("Dog");
pets.push("Cat");
pets.push("Fish");
pets.push("Turtle");

if (1 + 2 == 3) {
  for (pet of pets) {
    console.log(pet);
  }
} else {
  console.log("You need to buy pets from the store!");
}
