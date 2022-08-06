import React from "react";
import { EditHouseForm } from "../Forms/EditHouseForm";
import { NewRoomForm } from "../Forms/NewRoomForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  regular,
  solid,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import Button from "react-bootstrap/Button";

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

  const rooms = (myRoom) => (
    <div className="roomsBody">
      <br />
      {console.log("Myrroom", myRoom)}
      <ul className="allRooms">
        {house.rooms.map((room, index) => (
          <div className="roomsBody">
            <div className="houseRoom" key={index}>
              <label>
                <strong>{` Room:`}</strong>&nbsp;
                <span className="roomName">{`${room.name}`}</span>
                <strong>{` Area: `}</strong>
                <span className="roomArea">{`${room.area}`}</span> &nbsp;
              </label>
              <Button
                variant="danger"
                onClick={(event) => deleteRoom(room._id)}
              >
                Delete
              </Button>
            </div>
            <br />
          </div>
        ))}
      </ul>
      <br />
    </div>
  );
  //Returns the entire house component
  return (
    <div className="house">
      <h1 className="houseTitle">
        <FontAwesomeIcon icon={solid("house-user")} />
        {house.name}
      </h1>
      <EditHouseForm />
      Test
      {rooms({ rooms, houseId: house._id, deleteRoom })}
      <NewRoomForm addNewRoom={addNewRoom} />
    </div>
  );
};
