import React, { Component } from "react";
import "./asset/Choices.scss";
import EventModel from "./../../api/Event";

class Choices extends Component {

  onChooseHandler(id, result) {
    new EventModel().voteEvent(id, result, event => {
      console.log(event);
    });
  }

  render() {

    let { id, state } = this.props.event;

    return (
      <div className="choices-container">
        {state !== "FINISHED" ? 
          <React.Fragment>
            <div className="button-container">
              <button className="button home" onClick={() => this.onChooseHandler(id, "home")}>Home Wins</button>
            </div>
            <div className="button-container">
              <button className="button draw" onClick={() => this.onChooseHandler(id, "draw")}>Draw</button>
            </div>
            <div className="button-container">
              <button className="button away" onClick={() => this.onChooseHandler(id, "away")}>Away Wins</button>
            </div>
          </React.Fragment>
          :
          <h2>The match is over</h2>
        }
      </div>
    );
  }
}

export default Choices;
