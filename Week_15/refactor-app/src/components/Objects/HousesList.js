import React from "react";
import "../../custom.css";
import { House } from "./House";
import { housesApi } from "../../rest/housesApi";
import { NewHouseForm } from "../Forms/NewHouseForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  regular,
  solid,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

export class HousesList extends React.Component {
  //Creates the house as an object
  state = {
    houses: [],
  };

  addNewHouse = async (updatedHouse) => {
    console.log("addnewHouse Test");
    await housesApi.post(updatedHouse);
    //Updates the state after the current houses have been updated.
    this.fetchHouses();
  };

  // handleHouseInput = (event) => {
  //   console.log(event);
  //   const houseInput = event.target.value;
  //   console.log("handleHouseInput", houseInput);
  // };

  componentDidMount() {
    this.fetchHouses();
  }

  fetchHouses = async () => {
    const houses = await housesApi.get();
    this.setState({ houses });
  };

  updateHouse = async (updatedHouse) => {
    await housesApi.put(updatedHouse);
    //Updates the state after the current houses have been updated.
    this.fetchHouses();
  };

  render() {
    return (
      <div className="house-list">
        <h1>
          {" "}
          <FontAwesomeIcon icon={solid("house")} /> API
        </h1>

        <div>
          <NewHouseForm />
        </div>
        {this.state.houses.map((house) => (
          <House house={house} key={house._id} updateHouse={this.updateHouse} />
        ))}
      </div>
    );
  }
}
