import React, { useState } from "react";
import { housesApi } from "../../rest/housesApi";

export const NewHouseForm = (props) => {
  const [houseName, setName] = useState("");

  const onSubmit = (event) => {
    console.log("onSubmit event:", event);
    event.preventDefault();
    console.log("onSubmit house name:", houseName);
    housesApi.post(houseName);
    setName("");
    props.updateHouse();
  };

  return (
    <div>
      <div className="houseBody">
        <h4>Add a new house</h4>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="name"
            onChange={(event) => setName(event.target.value)}
            value={houseName}
          />

          <button type="submit">Add House</button>
        </form>
      </div>
    </div>
  );
};
