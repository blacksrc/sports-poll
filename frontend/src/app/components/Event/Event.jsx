import React, { Component } from "react";
import { withTheme } from "@callstack/react-theme-provider";
import "./asset/Event.scss";
import EventModel from "./../../api/Event";
import Choices from "./../Choices";

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: null
    };
  }

  getSportImage(sport) {
    switch (sport) {
      case "FOOTBALL":
        return this.props.theme.images.FOOTBALL;
      case "SNOOKER":
        return this.props.theme.images.SNOOKER;
      case "HANDBALL":
        return this.props.theme.images.HANDBALL;
      case "ICE_HOCKEY":
        return this.props.theme.images.ICE_HOCKEY;
      case "TENNIS":
        return this.props.theme.images.TENNIS;
    }
  }

  componentDidMount() {
    this.loadEvent();
  }

  loadEvent() {
    new EventModel().fetchRandomEvent(event => {
      this.setState({ event: event.data[0] });
    });
  }

  render() {
    if (!this.state.event) {
      return null;
    }

    let { homeName, awayName, country, sport, result } = this.state.event;
    let sportImage = this.getSportImage(sport);

    return (
      <div className="event-container">
        <div className="info">
          <img src={sportImage} className="sport" title={sport} />
          <br />
          <img
            src={`https://www.countryflags.io/${country}/shiny/64.png`}
            title={country}
            className="flag"
          />
        </div>
        <div className="team-container">
          <div className="name">
            {homeName}
            <div className="type">(Home)</div>
          </div>
          
        </div>
        <div className="team-container">
          <div className="name">
            <div className="type">(Draw)</div>
          </div>
        </div>
        <div className="team-container">
          <div className="name">
            {awayName}
            <div className="type">(Away)</div>
          </div>
        </div>

        <Choices
          event={this.state.event}
          onLoadEvent={() => this.loadEvent()}
        />
      </div>
    );
  }
}

export default withTheme(Event);
