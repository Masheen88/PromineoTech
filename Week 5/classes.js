/*
Classes should follow the Pascal naming convention instead of camelCase naming convention.
The first letter of each word is capitalized.
"this" is a constructor method that is called when creating an 'instance of' studento.
this keyword specifies the field that belong to the instance.
ie 3 different students would recommend the firstName for each individual student.
Each class should be in charge of one thing. Anytime you have a new concept that needs additional properties and functions, create a new object for it.
*/

//Sets a class with various properties.
class Student {
  constructor(firstName, lastName, phoneNumber, grade) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.grade = grade;
  }
  //Function that will run.
  introduce() {
    console.log(
      `${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber}`
    );
  }
}
//new is called instanciation of a class.
//Student invokes the constructor and runs whatever function is inside of the object.
let student1 = new Student("Matthew", "Cox", "6155555555", "A");
let student2 = new Student("Bob", "Ross", "5555555555", "B");

student1.introduce();
student2.introduce();
