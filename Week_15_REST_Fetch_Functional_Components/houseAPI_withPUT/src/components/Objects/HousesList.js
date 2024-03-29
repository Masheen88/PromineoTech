import React from "react";
import "../../custom.css";
import { House } from "./House";
import { housesApi } from "../../rest/housesApi";
import { NewHouseForm } from "../Forms/NewHouseForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export class HousesList extends React.Component {
  //Creates the house as an object
  state = {
    houses: [],
  };
  //test
  addNewHouse = async (updatedHouse) => {
    console.log("addnewHouse Test");
    await housesApi.post(updatedHouse);
    //Updates the state after the current houses have been updated.
    this.fetchHouses();
  };

  deleteHouse = async (houseId) => {
    await housesApi.delete(houseId);
    //Updates the state after the current houses have been updated.
    this.fetchHouses();
  };

  // handleHouseInput = (event) => {
  //   console.log(event);
  //   const houseInput = event.target.value;
  //   console.log("handleHouseInput", houseInput);
  // };

  //Fetches the houses from the API
  componentDidMount() {
    this.fetchHouses();
  }

  fetchHouses = async () => {
    const houses = await housesApi.get();

    // limit the number of houses to 5
    // if (houses.length > 5) {
    //   houses.length = 5;
    // }

    this.setState({ houses });
  };

  updateHouse = async (updatedHouse) => {
    await housesApi.put(updatedHouse);
    //Updates the state after the current houses have been updated.
    this.fetchHouses();
  };

  render() {
    return (
      <div>
        <div className="house-list">
          <h1>
            {" "}
            <FontAwesomeIcon icon={solid("house")} /> API
          </h1>

          <div>
            <NewHouseForm updateHouse={this.updateHouse} />
          </div>
          <br />
          <div className="houseBody">
            {console.log("House: Test123", this.state.houses)}
            {this.state.houses.reverse().map((house) => (
              <House
                house={house}
                key={house.house_id}
                updateHouse={this.updateHouse}
              />
            ))}
          </div>
        </div>
        <br />
      </div>
    );
  }
}
