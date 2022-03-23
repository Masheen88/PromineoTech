//Declares a class member with a name and position
class Member {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }
}

//Declares a class team with id, name, and members of the team.
class Team {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.members = [];
  }

  addMember(member) {
    //pushes a member to the members array
    this.members.push(member);
  }

  deleteMember(member) {
    //declares the index of the member in the members array
    let index = this.members.indexOf(member);
    //removes the one element from the member in the members array
    this.members.splice(index, 1);
  }
}

//Stores teams in the array
let teams = [];
//Assigns and Id to the team and increments it
let teamId = 0;

//Action taken when clicking on create
onClick("new-team", () => {
  teams.push(new Team(teamId++, getValue("new-team-name")));
  //calls the function to iterate over the team array and build a table for each one
  drawDOM();
});

//function to take a member id(element) and action to take on clicking.
function onClick(id, action) {
  //pass in the id on click
  let element = document.getElementById(id);
  //listens for a click and executes the action
  element.addEventListener("click", action);
  return element;
}

//funtion to simplify and get the element itself by id.
function getValue(id) {
  //returns the value of the element based on the id.
  return document.getElementById(id).value;
}

//function to iterate over a team array and build a table for each team.
function drawDOM() {
  //Gets the reference to the teams div in team.html
  let teamDiv = document.getElementById("teams");
  //calls the fucntion to clear the teamdiv
  clearElement(teamDiv);
  for (team of teams) {
    let table = createTeamTable(team);
    let title = document.createElement("h2");
    //Builds the title based on the instance of the team class name.
    title.innerHTML = team.name;
    //calls the function to create a delete button to remove a team
    title.appendChild(createDeleteTeamButton(team));
    //Adds the team title
    teamDiv.appendChild(title);
    //Adds the team table
    teamDiv.appendChild(table);
    //Adds a row for each member
    for (member of team.members) {
      createMemberRow(team, table, member);
    }
  }
}

function createMemberRow(team, table, member) {
  let row = table.insertRow(2);
  row.insertCell(0).innerHTML = member.name;
  row.insertCell(1).innerHTML = member.position;
  let actions = row.insertCell(2);
  actions.appendChild(createDeleteRowButton(team, member));
}

function createDeleteRowButton(team, member) {
  let btn = document.createElement("button");
  btn.className = "btn btn-primary";
  btn.innerHTML = "Delete";
  btn.onclick = () => {
    let index = team.members.indexOf(member);
    team.members.splice(index, 1);
    //Re-renders the data by calling function drawDOM
    drawDOM();
  };
  //after rendering returns the button value
  return btn;
}

function createDeleteTeamButton(team) {
  let btn = document.createElement("button");
  btn.className = "btn btn-primary";
  btn.innerHTML = "Delete Team";
  btn.onclick = () => {
    let index = teams.indexOf(team);
    teams.splice(index, 1);
    drawDOM();
  };
  return btn;
}

//Function to create a member button
function createNewMemberButton(team) {
  let btn = document.createElement("button");
  btn.className = "btn btn-primary";
  btn.innerHTML = "Create";
  btn.onclick = () => {
    //Creates a new class memember
    team.members.push(
      new Member(
        getValue(`name-input-${team.id}`),
        getValue(`position-input-${team.id}`)
      )
    );
  };
}

//function to build the team table
function createTeamTable(team) {
  let table = document.createElement("table");
  table.setAttribute("class", "table table-dark table-striped");
  let row = table.insertRow(0);
  let nameColumn = document.createElement("th");
  let positionColumn = document.createElement("th");
  nameColumn.innerHTML = "Name";
  positionColumn.innerHTML = "Position";
  row.appendChild(nameColumn);
  row.appendChild(positionColumn);
  //Row where we can insert new members
  let formRow = table.insertRow(1);
  let nameTh = document.createElement("th");
  let positionTh = document.createElement("th");
  let createTh = document.createElement("th");
  //Name of team table
  let nameInput = document.createElement("input");
  nameInput.setAttribute("id", `name=input-team-${team.id}`);
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("class", "form-control");
  //Position of team table
  let positionInput = document.createElement("input");
  positionInput.setAttribute("id", `position=input-team-${team.id}`);
  positionInput.setAttribute("type", "text");
  positionInput.setAttribute("class", "form-control");
  //calls the function to create a new button
  let newMemberButton = createNewMemberButton(team);

  //Appends various items to the table
  nameTh.appendChild(nameInput);
  positionTh.appendChild(positionInput);
  createTh.appendChild(newMemberButton);
  formRow.appendChild(nameTh);
  formRow.appendChild(positionTh);
  formRow.appendChild(createTh);
  //returns the table value
  return table;
}

function clearElement(element) {
  while (element.firstChild) {
    //removes the firstChild while there is still a first Child.
    element.removeChild(element.firstChild);
  }
}
