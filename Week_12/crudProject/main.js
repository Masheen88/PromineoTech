//Class to define what a House contains
class House {
  constructor(name) {
    this.name = name;
    this.rooms = [];
  }

  //Method to add a new room.
  addRoom(name, area) {
    console.log("addROom name:", name); //
    console.log("addROom area:", area); //
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
  static houses = [];

  static crudcrud = "https://crudcrud.com/api/4d4361f846b94b46abd95e2d0b59d390"; //Replace this URL if expired
  static url = `${this.crudcrud}/house`;

  //Method to returns all houses from the url -GET
  static getAllHouses() {
    const data = $.get(this.url);
    console.log("getAllHouses data:", data); //
    return data;
  }

  //Method to return a specific house from the url -GET
  static getHouse(id) {
    return $.get(`${this.url}/${id}`);
  }

  //Method to takes an instance of the House class ie. (name,area) - POST
  static createHouse(house) {
    const responsePromise = $.ajax({
      url: this.url,
      data: JSON.stringify(house),
      dataType: "json",
      type: "POST",
      contentType: "application/json",
      crossDomain: true,
    });
    return responsePromise;
  }

  // Method to update an existing hosue - PUT
  static updateHouse(house) {
    const id = house._id;
    delete house._id;
    const responsePromise = $.ajax({
      url: `${this.url}/${id}`,
      dataType: "json",
      data: JSON.stringify(house),
      contentType: "application/json",
      crossDomain: true,
      type: "PUT",
    });
    return responsePromise;
  }

  //Method to delete an existing house - DELETE
  static deleteHouse(id) {
    const responsePromise = $.ajax({
      url: `${this.url}/${id}`,
      type: "DELETE",
    });
    return responsePromise;
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
        return HouseService.getAllHouses();
      })
      .then((houses) => this.render(houses));
  }

  //Method to create a House
  static createHouse(name) {
    //Re-renders the DOM
    HouseService.createHouse(new House(name)).then(() => {
      HouseService.getAllHouses().then((houses) => this.render(houses)); //Re-renders the DOM
      return console.log("createHouse Name:", name); //
    });
  }

  //Method to add a room to a House
  static addRoom(id) {
    console.log("addRoom house._Id:", id); //
    for (let house of this.houses) {
      console.log("addRoom house:", house); //
      console.log("addRoom this.houses:", this.houses); //

      if (house._id == id) {
        console.log("if house._id:", house._id);
        house.rooms.push(
          new Rooms(
            $(`#${house._id}-room-name`).val(),
            $(`#${house._id}-room-area`).val()
          )
        );
        console.log("Rooms.house._id:", house); //
        //Method to send an update request to the API
        //Re-renders the DOM
        HouseService.updateHouse(house).then(() => {
          return HouseService.getAllHouses().then((houses) =>
            this.render(houses)
          );
        });
      }
    }
  }

  //Method to delete a room from a House
  static deleteRoom(houseId, roomId) {
    console.log("deleteRoom houseId:", houseId); //
    console.log("deleteRoom roomId:", roomId); //
    for (let house of this.houses) {
      if (house._id == houseId) {
        // console.log("deleteRoom house._id:", house._id); //
        for (let room of house.rooms) {
          if (room._id == roomId) {
            // console.log("deleteRoom test"); //
            house.rooms.splice(house.rooms.indexOf(room), 1);
            //Re-renders the DOM
            HouseService.updateHouse(house).then(() => {
              return HouseService.getAllHouses().then((houses) =>
                this.render(houses)
              );
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
      console.log("render House._id", `${house._id}`); //
      console.log("render house:", house); //
      console.log("render houseLength:", houses.length); //
      console.log("render", $("#app")); //
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
        console.log("render room:", room); //
        console.log("render ${room._id}:", `${room._id}`); //
        $(`#${house._id}`)
          .find(".card-body")
          .append(
            `
              <p>
                <span id="name-${room._id}"
                  ><strong>Name: </strong> ${room.name}</span
                >
                <span id="area-${room._id}"
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
