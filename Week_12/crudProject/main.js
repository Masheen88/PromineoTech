//API to use? https://crudcrud.com

//Create - POST
//Read - GET
//Update - PUT
//Delete - DELETE

//Class to define what a House contains
class House {
  constructor(name) {
    this.name = name;
    this.rooms = [];
  }

  //Method to add a new room.
  addRoom(name, area) {
    this.rooms.push(new Rooms(name, area));
  }
}

//Class to define what a Room in the House contains.
class Rooms {
  constructor(name, area) {
    this.name = name;
    this.area = area;
  }
}

//Class to define a house API / methods to view/update a house.
class HouseService {
  static url = "https://crudcrud.com/api/8c7f41f9c6dc4fdb92e2b5c595dcfb61";
  // static url = "https://ancient-taiga-31359.herokuapp.com/api/houses";

  //Method to returns all houses from the url -GET
  static getAllHouses() {
    return $.get(this.url);
  }

  //Method to return a specific house from the url -GET
  static getHouse(id) {
    return $.get(this.url + `/${id}`);
  }

  //Method to takes an instance of the House class ie. (name,area) - POST
  static createHouse(house) {
    return $.post(this.url, house); //house is the http payload
  }

  //Method to update an existing hosue - PUT
  static updateHouse(house) {
    return $.ajax({
      url: this.url + `/${house._id}`, //_id is the value that the database will create
      dataType: "json",
      data: JSON.stringify(house), //house is converted into a string
      contentType: "application/json",
      type: "PUT",
    });
  }

  //Method to delete an existing house - DELETE
  static deleteHouse(id) {
    return $.ajax({
      url: this.url + `/${id}`,
      type: "DELETE",
    });
  }
}

//Re-Renders the DOM when creating a new class.

class DOMManager {
  static houses;

  //Method that gets all houses and then re-renders the DOM with the new response.
  static getAllHouses() {
    HouseService.getAllHouses().then((houses) => this.render(houses));
  }

  //Method to delete a specific House
  static deleteHouse(id) {
    HouseService.deleteHouse(id)
      .then(() => {
        //Re-renders the DOM
        return HouseService.getAllHouses();
      })
      .then((houses) => this.render(houses));
  }

  //Method to create a House
  static createHouse(name) {
    HouseService.createHouse(new House(name)).then(() => {
      return HouseService.getAllHouses().then((houses) => this.render(houses)); //Re-renders the DOM
    });
  }

  //Method to add a room to a House
  static addRoom(id) {
    for (let house of this.houses) {
      if (house._id == id) {
        house.rooms.push(
          new Rooms(
            $(`#${house._id}-room-name`).val(),
            $(`#${house._id}-room-area`).val()
          )
        );
        //Method to send an update request to the API
        HouseService.updateHouse(house).then(() => {
          //Re-renders the DOM
          return HouseService.getAllHouses().then((houses) =>
            this.render(houses)
          );
        });
      }
    }
  }

  //Method to delete a room from a House
  static deleteRoom(houseId, roomId) {
    for (let house of this.houses) {
      if (house._id == houseId) {
        for (let room of house.rooms) {
          if (room._id == roomId) {
            house.rooms.splice(house.rooms.indexOf(room), 1);
            HouseService.updateHouse(house).then(() => {
              return HouseService.getAllHouses().then((houses) =>
                this.render(houses)
              ); //Re-renders the DOM
            });
          }
        }
      }
    }
  }

  //Renders various HTML elements to the DOM
  static render(houses) {
    this.houses = houses;
    $("#app").empty(); //References the div id #app in index.html
    for (let house of houses) {
      $("#app").prepend(
        `
        <div id="${house._id}" class ="card">
            <div class="Card-header">
                <h2>${house.name}</h2>
                <button class="btn btn-danger" onclick="DOMManager.deleteHouse('${house._id}')">Delete</button>
            </div>
            <div class="card-body">
                <div class="card">
                    <div class="row">
                       <div class="col-sm">
                            <input type="text" id="${house._id}-room-name" class="form-control" placeholder="Room Name">
                       </div>
                       <div class="col-sm">
                            <input type="text" id="${house._id}-room-area" class="form-control" placeholder="Room Area">
                       </div>
                    </div>
                    <button id="${house._id}-new-room" onclick="DOMManager.addRoom('${house._id}')" class="btn btn-primary form-control")">Add</button>
                </div>
            </div>
        </div> <br>
        `
      );
      //For each room of the house append additional HTML elements.
      for (let room of house.rooms) {
        $(`#${house._id}`)
          .find(".card-body")
          .append(
            `
              <p>
                <span id="name-${room._id}"
                  ><strong>Name: </strong> ${room.name}</span
                >
                <span id="name-${room._id}"
                  ><strong>Area: </strong> ${room.area}</span
                >
                <button
                  class="btn btn-danger"
                  onclick="DOMManager.deleteRoom('${house._id}', '${room._id}')"
                >
                  Delete Room
                </button>
              </p>
            `
          );
      }
    }
  }
}

//Method to create a new house on click.
$("#create-new-house").click(() => {
  DOMManager.createHouse($("#new-house-name").val());
  $("#new-house-name").val("");
});

//Test method to get all houses.
DOMManager.getAllHouses();
