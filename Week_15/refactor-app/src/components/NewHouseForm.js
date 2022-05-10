import React, { useState } from "react";

export const NewHouseForm = (props) => {
  const [houseName, setName] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    props.addNewHouse({ houseName });
    setName("");
    console.log("onSubmit event:", event);
  };

  return (
    <div>
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
  );
};
