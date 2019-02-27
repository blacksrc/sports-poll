import React, { Component } from "react";
import "./asset/Event.scss";
import EventModel from "./../../api/Event";

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: null
    };
  }

  componentDidMount() {
    new EventModel().fetchRandomEvent(event => {
      this.setState({ event: event.data[0] });
    });
  }

  render() {
    if (!this.state.event) {
      return null;
    }

    let { homeName, awayName, country } = this.state.event;

    return (
      <div className="event-container">
        <div className="country">
          <img src={`https://www.countryflags.io/${country}/shiny/64.png`} />
        </div>
        <div className="team-container">
          <div className="name">{homeName}</div>
        </div>
        <div className="team-container">
          <div className="name">{awayName}</div>
        </div>
      </div>
    );
  }
}

export default Event;
