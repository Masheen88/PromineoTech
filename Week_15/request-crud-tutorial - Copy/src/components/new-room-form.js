import React from "react";

export default class NewRoomForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: "",
      areaValue: "",
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAreaChange = this.handleAreaChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleNameChange(event) {
    //the target from the event's value.
    this.setState({ nameValue: event.target.value });
  }

  handleAreaChange(event) {
    this.setState({ areaValue: event.target.value });
  }

  handleClick(event) {
    //Call ths addJNewRoom method passed in from the props and passes in the data of this specific house.

    this.props.addNewRoom(event, this.props.data, {
      name: this.state.nameValue,
      area: this.state.areaValue,
    });
    //resets the values to blank for a nice user experience
    this.setState({ nameValue: "", areaValue: "" });
  }
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="name"
          onChange={this.handleNameChange}
          value={this.state.nameValue} //Ties the value in the input to the nameValue variable in the newform state.
        ></input>
        <input
          type="text"
          placeholder="area"
          onChange={this.handleAreaChange}
          value={this.state.areaValue} //Ties the value in the input to the nameValue variable in the newform state.
        ></input>
        {/* Handles the data based on the event. */}
        <button onClick={this.handleClick}>Add Room</button>
      </div>
    );
  }
}
