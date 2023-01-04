//A player of a team.
class Player {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }

  describe() {
    return `${this.name}, plays, ${this.position}`;
  }
}

//A team of players
class Team {
  constructor(name) {
    this.name = name;
    this.players = [];
  }

  addPlayer(player) {
    if (player instanceof Player) {
      this.players.push(player);
    } else {
      throw new Error(
        "You can only add add an instance of player. Argument is not a player: ",
        player
      );
    }
  }

  describe() {
    return `${this.name} has ${this.players.length} players.`;
  }
}

//Start of Selection menu - Begin
class Menu {
  constructor() {
    this.teams = [];
    this.selectedTeam = null;
  }
  start() {
    //Shows the menu until selection has been made.
    let selection = this.showMainMenuOptions();
    while (selection != 0) {
      switch (selection) {
        case "1":
          this.createTeam();
          break;
        case "2":
          this.viewTeam();
          break;
        case "3":
          this.deleteTeam();
          break;
        case "4":
          this.displayTeams();
          break;
        default:
          selection = 0;
      }
      //This will keep loop until we select something.
      selection = this.showMainMenuOptions();
    }
    //If 0 is selected the program exits.
    alert("Goodbye!");
  }

  showMainMenuOptions() {
    return prompt(`
    0) exit
    1) create new team
    2) view team
    3) delete team
    4) display all teams
    `);
  }

  showTeamMenuOptions(teamInfo) {
    return prompt(`
  0) back
  1) create player
  2) delete player
  ------------------------
  ${teamInfo}
  `);
  }

  displayTeams() {
    //Needs to build a string to display it in a message box or prompt.
    let teamString = "";
    //For loop iterates through each team.
    for (let i = 0; i < this.teams.length; i++) {
      //Gathers each team and adds a new line.
      teamString += i + ") " + this.teams[i].name + `\n`;
    }
    //Allows you to see all of the teams.
    alert(teamString);
  }

  deleteTeam() {
    let index = prompt("Enter the index of the team you wish to delete:");
    if (index > -1 && index < this.teams.length) {
      this.teams.splice(index, 1);
    }
  }

  createTeam() {
    let name = prompt("Enter name for new team:");
    this.teams.push(new Team(name));
  }
  //View details of a specific team.
  //To avoid crashing/errors you must always validate your input.
  viewTeam() {
    let index = prompt("Enter the index of the team you wish to view.");
    if (index > -1 && index < this.teams.length) {
      this.selectedTeam = this.teams[index];
      let description = "Team Name: " + this.selectedTeam.name + `\n`;
      //selectedTeam; //Builds a list of all team players.
      for (let i = 0; i < this.selectedTeam.players.length; i++) {
        description +=
          i +
          ") " +
          this.selectedTeam.players[i].name +
          " - " +
          this.selectedTeam.players[i].position +
          `\n`;
      }

      let selection = this.showTeamMenuOptions(description);
      switch (selection) {
        case "1":
          this.createPlayer();
          break;
        case "2":
          this.deletePlayer();
          break;
      }
    }
  }

  createPlayer() {
    let name = prompt("Enter name for new player:");
    let position = prompt("Enter Position for new player:");
    this.selectedTeam.players.push(new Player(name, position));
  }

  deletePlayer() {
    let index = prompt("Enter the index of the player you wish to delete:");
    if (index > -1 && index < this.selectedTeam.players.length) {
      this.selectedTeam.players.splice(index, 1);
    }
  }
}

//Create an instance of the menu

let menu = new Menu();
menu.start();
