//Iports jquery to be used via $
import $ from "jquery";

//Export default allows webpack to make it available to other classes
export default class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  //changes the inner html name of the person to that.
  display(elementId) {
    // changes the DOM based upon the element id passed in
    $(`#${elementId}`).text(`${this.firstName} ${this.lastName}`);
  }
}
