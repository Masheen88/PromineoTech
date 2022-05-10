import React from "react";
import { NewRoomForm } from "./NewRoomForm";

export const House = (props) => {
  const { house, updateHouse } = props;

  const deleteRoom = (roomId) => {
    const updatedHouse = {
      //If delete a room remove the room from the array.
      ...house,
      rooms: house.rooms.filter((x) => x._id !== roomId),
    };
    updateHouse(updatedHouse);
  };

  const addNewRoom = (room) => {
    return updateHouse({ ...house, rooms: [...house.rooms, room] });
  };

  const rooms = () => (
    <ul>
      {house.rooms.map((room, index) => (
        <li key={index}>
          <label>{`${room.name} Area: ${room.area}`}</label>
          <button onClick={(event) => deleteRoom(room._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
  //Returns the entire house component
  return (
    <div>
      <h1>{house.name}</h1>
      {rooms({ rooms, houseId: house._id, deleteRoom })}
      <NewRoomForm addNewRoom={addNewRoom} />
    </div>
  );
};
