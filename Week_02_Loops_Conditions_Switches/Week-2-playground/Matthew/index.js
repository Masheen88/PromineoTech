/**
 * 
 * Conditionals
 * 
 * Equal To: ===
 * Not Equal To: !==
 * Greater: >
 * Less: <
 * Greater than or Equal: >=
 * Less than or Equal: <=
 * Not: !
 * And: &&
 * Or: ||
 * 
 */

/**
 * 
 * Uses:
 * Checks how old someone is
 * -- georgeAge >= 18
 * 
 * Warn the user if the weather outside is bad
 * -- if(!sunny) {//insert code here}
 * 
 */

/**
 * 
 * Check security level
 * 
 * prompt()
 * alert()
 * 
 */

// let clearance = parseInt(prompt('What is your clearance level?'));

// if...else if...else
// if(clearance === 1) {
//     alert('Clearance level one');
// } else if (clearance === 2) {
//     alert('Clearance level two');
// } else {
//     alert('No Clearance');
// }

// switch
// switch(clearance) {
//     case 1:
//         alert('Clearance level one')
//         break;
//     case 2:
//         alert('Clearance level two')
//         break;
//     default:
//         alert('No Clearance')
// }

/**
 * Loops
 */

// For Loops

// Code that I want to execute 10 times
for(let i = 0; i < 10; i++) {
    alert(i);
}

// Run code for every element in an array
let students = ['Tommy', 'Betty', 'Barney']
for(let student in students) {
    alert(student);
}

// While Loops

let running = true;
while(running) {
    running = false;
}

do {
    running = false;
} while(running);