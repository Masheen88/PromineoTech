import React from "react";
import { EditHouseForm } from "../Forms/EditHouseForm";
import { NewRoomForm } from "../Forms/NewRoomForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import Button from "react-bootstrap/Button";
import { housesApi } from "../../rest/housesApi";

export const House = (props) => {
  const { house, updateHouse } = props;
  // console log a house
  console.log("house: Test:", house);

  const deleteHouse = async (houseId) => {
    console.log("deleteHouse ID:", houseId);
    await housesApi.delete(houseId);
    //Updates the state after the current houses have been updated.
    updateHouse();
  };

  const deleteRoom = (roomId) => {
    const updatedHouse = {
      //If delete a room remove the room from the array.
      ...house,
      rooms: house.rooms.filter((x) => x.house_id !== roomId),
    };
    updateHouse(updatedHouse);
  };

  const addNewRoom = (room) => {
    //generate random index
    let randomIndex = Math.floor(Math.random() * house.rooms.length);
    //check if existing room id matches the randomIndex and if it does increment until it does not match
    while (house.rooms.some((x) => x.house_id === randomIndex)) {
      randomIndex++;
      console.log("randomIndex:", randomIndex);
    }

    const updatedHouse = {
      ...house,
      rooms: [
        ...house.rooms,
        {
          _id: randomIndex,
          name: room.name,
          area: room.area,
        },
      ],
    };

    console.log("updatedHouse:", updatedHouse);
    return updateHouse(updatedHouse);
  }; //Adds the room to the house

  //function to check if the room name is null or empty
  const checkRoomName = (room) => {
    // console.log("Shows a room object:", room); //Shows a room object in the console

    //If the room name is null or empty return an empty string
    if (room === null || room === "") {
      return "";
    }
    //If the room name is not null or empty return the room name
    else {
      return room.name;
    }
  };

  //function to check if the room area is null or empty
  const checkRoomArea = (room) => {
    //If the room area is null or empty return an empty string
    if (room === null || room === "") {
      return "";
    }
    //If the room area is not null or empty return the room area
    else {
      return room.area;
    }
  };

  const rooms = (myRoom) => (
    <div className="roomsBody">
      <br />
      {/* {console.log("Myroom", myRoom)} */}
      <ul className="allRooms">
        {house.rooms.map((room, index) => (
          <div className="roomsBody" key={index}>
            <div className="houseRoom">
              <label>
                <strong>{` Room:`}</strong>&nbsp;
                <span className="roomName">{checkRoomName(room)}</span>
                <strong>{` Area: `}</strong>
                <span className="roomArea">{checkRoomArea(room)}</span> &nbsp;
              </label>

              <Button
                variant="danger"
                onClick={(event) => deleteRoom(room.room_id)}
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
      {/* button to delete a house */}
      <Button variant="danger" onClick={(event) => deleteHouse(house._id)}>
        {" "}
        Delete{" "}
      </Button>
      <EditHouseForm houseId={house.house_id} />
      {rooms({ rooms, houseId: house.house_id, deleteRoom })}
      <NewRoomForm addNewRoom={addNewRoom} />
    </div>
  );
};
