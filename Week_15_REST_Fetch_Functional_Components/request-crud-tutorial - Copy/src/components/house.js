import React from "react";
import NewRoomForm from "./new-room-form";

export default class House extends React.Component {
  render() {
    const rooms = this.props.data.rooms
      ? this.props.data.rooms.map((room, index) => (
          <li key={index}>
            {room.name} Area: {room.area}
            <button
              onClick={(event) =>
                //delete roomRoom can be accessed as it is passed through the props from the parent component.
                this.props.deleteRoom(event, this.props.data, room)
              }
            >
              Delete
            </button>
          </li>
        ))
      : null; //If the room is empty return null.
    return (
      <div>
        {/* data is the house itself being passed in, name is the name of the data 'house'. */}
        <h1>{this.props.data.name}</h1>
        <ul>{rooms}</ul>
        <NewRoomForm
          addNewRoom={this.props.addNewRoom}
          //this.props.data allows the form to have acess to all of the house data.
          data={this.props.data}
        />
      </div>
    );
  }
}
