import React from "react";
import "./App.css";
import House from "./components/house";

// Endpoint used for all requests
const HOUSES_ENDPOINT = "https://ancient-taiga-31359.herokuapp.com/api/houses";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.addNewRoom = this.addNewRoom.bind(this);
    this.deleteRoom = this.deleteRoom.bind(this);
  }

  render() {
    //If the state exists and is not null, iterate through all the houses on the state and create a house element from them.
    const houses = this.state
      ? this.state.houses.map((house, index) => (
          <House
            key={index}
            data={house}
            addNewRoom={this.addNewRoom}
            deleteRoom={this.deleteRoom}
          />
        ))
      : null; //If it is null, nothing is returned.
    return <div>{houses}</div>;
  }

  //http/async calls are made here.
  componentDidMount() {
    fetch(HOUSES_ENDPOINT).then((res) =>
      res.json().then((data) => {
        this.setState({
          //The data return will then call setState of the houses property.
          houses: data,
        });
      })
    );
  }

  //Event is the default action triggered when a button is clicked.
  addNewRoom(event, house, room) {
    //Pushes a new room to the house rooms array.
    house.rooms.push(room);
    //Sends an http request to make the changes permanenet
    updateHouse(house).then(() => {
      this.setState((state) => {
        //iterates through each house in the previous state.
        for (let h of state.houses) {
          //If theHouse id and house._id are equal it return the updated house.
          if (h._id === house._id) {
            let h = house;
            break;
          }
        }
        return state;
      });
    }); //reloads the house once the data has returned.
    event.preventDefault();
  }

  deleteRoom(event, house, room) {
    //Unqiuely identifies which room.
    const index = house.rooms.indexOf(room);
    //removes the element at the index.
    house.rooms.splice(index, 1);
    //Sends an http request to make the changes permanenet
    updateHouse(house).then(() => {
      this.setState((state) => {
        //iterates through each house in the previous state.
        for (let h of state.houses) {
          //If theHouse id and house._id are equal it return the updated house.
          if (h._id === house._id) {
            let h = house;
            break;
          }
        }
        return state;
      });
    }); //reloads the house once the data has returned.
    event.preventDefault();
  }
}

function updateHouse(house) {
  // ._id is the id assigned by the database.
  return fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
    method: "PUT", //updates the house where adding or deleting a room
    headers: {
      "Conent-Type": "application/json",
    },
    body: JSON.stringify(house), //sends the house to be updated in the database.
  });
}
