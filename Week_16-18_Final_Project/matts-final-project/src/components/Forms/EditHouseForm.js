import React, { useState } from "react";
import { housesApi } from "../../rest/housesApi";
import Button from "react-bootstrap/Button";

export const EditHouseForm = (props) => {
  const [houseName, setName] = useState("");

  const onSubmit = (event) => {
    console.log("onSubmit event:", event);
    event.preventDefault();
    console.log("onSubmit housename:", houseName);
    housesApi.putTest("626ae63412f5da001704ada2", houseName);
    setName("");
  };

  return (
    <div className="editHouseBody">
      <h3>Edit a House</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Nick's fault you can't edit :)"
          onChange={(event) => setName(event.target.value)}
          value={houseName}
        />
        &nbsp;
        <Button variant="success" type="submit">
          Edit Current House
        </Button>
      </form>
    </div>
  );
};
