/*
Shared code can be moved into a parent class and both classes inherit from the parent class.
Allows you to keep common code in one place if changes are ever needed.
*/

//Example with duplicated parts of code. This needs to be abstracted and made cleaner.
/*
class PromotionSender {
  constructor() {}
  sendNotification(notification) {
    console.log("Sending: ", notification);
  }

  findUserWithStatus(status) {
    let users = getUsers(status);
    return users;
  }

  calculateDiscount(status) {
    if (status === "GOLD") {
      return 0.3;
    } else if (status === "SILVER") {
      return 0.15;
    }
    return 0;
  }
}

class CollectionsSender {
  constructor() {}
  sendNotification(notification) {
    console.log("Sending:", notification);
  }

  findUserWithStatus(status) {
    let users = getUsers(status);
    return users;
  }
  calculateFee(status) {
    if (status === "OVERDUE") {
      return 10;
    } else if (status === "DELINQUENT") {
      return 25;
    }
    return 5;
  }
}
*/

//Abstracted Code

class NotificationSender {
  constructor(status) {
    //this. represents the instance of the class we are dealing with.
    this.status;
  }
  sendNotification(notification) {
    console.log("Sending: ", notification);
  }

  findUserWithStatus(status) {
    let users = getUsers(status);
    return users;
  }
}

//Extends, inherites from another class.
class PromotionSender extends NotificationSender {
  constructor(status) {
    //Super, refers to the parent class. When paranthesis are used it refers to the parent class constructor.
    //ie. constructor(status)
    //You must ALWAYS call the parents' constructor in a class that extends another class.
    //This gives the extended class access to the the methods in that class. ie NotificationSender.
    super(status);
  }

  calculateDiscount(status) {
    if (status === "GOLD") {
      return 0.3;
    } else if (status === "SILVER") {
      return 0.15;
    }
    return 0;
  }
}

class CollectionsSender extends NotificationSender {
  constructor(status) {
    super(status);
  }

  calculateFee(status) {
    if (status === "OVERDUE") {
      return 10;
    } else if (status === "DELINQUENT") {
      return 25;
    }
    return 5;
  }
}

let collectionsSender = new CollectionsSender("OVERDUE");
collectionsSender.sendNotification("This is a test collections notification.");
