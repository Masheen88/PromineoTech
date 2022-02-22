//

class Player {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }

  describe() {
    return `${this.name}, plays, ${this.position}`;
  }
}

class Team {
  constructor(name) {
    this.name = name;
    this.players = [];
  }
}
//Continue vid @ 1:40

// countSheeps([true, false, false, true, true]);

// function countSheeps(arrayofsheeps) {
//   return console.log(arrayofsheeps.filter(Boolean).length);
// }
