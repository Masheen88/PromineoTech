import React from "react";
import { NewRoomForm } from "../Forms/NewRoomForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  regular,
  solid,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

export const House = (props) => {
  const { house, updateHouse } = props;

  const deleteHouse = (houseId) => {
    const updatedHouse = {
      //If delete a room remove the room from the array.
      ...house,
      rooms: house.rooms.filter((x) => x._id !== houseId),
    };
    updateHouse(updatedHouse);
  };

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
        <div key={index}>
          <label>
            <strong>{`Room:`}</strong>{" "}
            <span className="roomName">{`${room.name}`}</span>
            <strong>{`Area: `}</strong>
            <span className="roomArea">{`${room.area}`}</span> |{" "}
          </label>
          <button onClick={(event) => deleteRoom(room._id)}>Delete</button>
        </div>
      ))}
    </ul>
  );
  //Returns the entire house component
  return (
    <div>
      <h1>
        <FontAwesomeIcon icon={solid("house-user")} />
        {house.name}
      </h1>
      {rooms({ rooms, houseId: house._id, deleteRoom })}
      <NewRoomForm addNewRoom={addNewRoom} />
    </div>
  );
};
