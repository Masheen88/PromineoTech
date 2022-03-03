//Object Oriented Programming (OOP)

//What is an Object
class Car {
  //Example properties: make, model color

  //Constructor allows you to define a properties universal to the overall object. ie. Car
  constructor(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
  }

  //Getter - FUnction that returns the result of another method within it.
  //Is a method that calls a function and assigns it to a property. ie beep for car horn.
  get beep() {
    return this.makeBeep();
  }

  //Method - Function to beep!
  beep() {
    // console.log(`${this.make} beeps`);
    return `${this.make} ${this.model} beeps`;
  }
}

const truck = new Car("Toyota", "Tacoma", "Black");
console.log("Object with various properties", truck);

//executes the function within the class 'object ie. Car'
// truck.beep();

//Call the Getter
console.log(truck.beep);

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  //Get functions typically lead to cleaner code instead of assigning everything to a global variable.
  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.length * this.width;
  }
}

const square = new Rectangle(5, 5);
console.log(square.area);

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  //Static Property

  //Static means the property will not be inherited by its children.
  //To show ie displayname you would do Point.displayName;
  static displayName = `Point`;
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const point1 = new Point(1, 2);
const point2 = new Point(5, 6);

point1.displayName;
//Display the static variable or method.
Point.displayName;

//Inputs the variables into the function of the class.
Point.distance(point1, point2);

//Practical Example - ie. Social Media

class Post {
  constructor(title, body, imageURL, private) {
    this.likes = likes;
    this.title = title;
    this.body = body;
    this.imageURL = imageURL;
    //private ie. set a post to only be viewed by a certain group.
    this.private = private;
    //Denotes a private property. - Can ONLY be reference inside of a function or object. ie. Post.
    this._property = property;
  }

  //What can you the 'Author' do in a facebook post.
  //create post
  create() {
    return;
  }
  //read a post
  read() {
    //Error handling with try catch block. A then catch block is the older method from ES5.
    //Try catch blocks are easier to read and more elegant.
    //Try catch runs once at runtime and you must rerun at code.
    try {
      if (!this.private) {
        console.log(`${this.title}${this.body}`);
      }
    } catch (error) {
      //Display javascript's default error message.
      console.log("Error:", error);
      //You can define what the error expected is.
      console.log("This is not a boolean!");
    }
  }
  //update a post
  update(title, body, imageURL, private) {
    this.title = title;
    this.body = body;
    this.imageURL = imageURL;
    this.private = private;
  }
  //delete a post
  //CRUD - create, read, update, delete.
  get shares() {
    return this.countShares;
  }

  get likes() {
    return this.countLikes;
  }

  countLikes() {
    //ie. return # of likes.
    return 12;
  }

  get shares() {
    return this.countShares;
  }
  countShares() {
    //ie. return # of shares.
    return 15;
  }
}

const post1 = new Post(
  `Hello world`,
  `My first post`,
  "Http://example.com/6x6",
  true
);

post1.likes;
post1.shares;
post1.title;

post1.update(`New Hello World!`, `Your first post`, ``, `potato`);

//Extensibility
class Animal {
  constructor(name) {
    this.name = name;
  }

  //
  speak() {
    console.log(`This is a ${this.name}`);
  }
}

//This method will call dog class and pull in the Animal property as it is an 'extension' of it.
class Dog extends Animal {
  //Dogs can speak but all animals cannot in this example.
  speak() {
    //Super pulls from the parent class ie. Animal
    super.speak();
    console.log("Bark");
  }
}

const fido = new Dog(`Fido`);

//In this example it will pull the most Specific method first. ie. Dog speak() instead of Animal speka()
fido.speak();

//extra. dig into extra class methods.
