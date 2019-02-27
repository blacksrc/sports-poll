import React, { Component } from "react";
import "./asset/Choices.scss";
import EventModel from "./../../api/Event";

class Choices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.event.id,
      state: this.props.event.state
    };
  }

  onChooseHandler(id, result) {
    new EventModel().voteEvent(id, result, event => {
      this.setState(
        {
          state: event.data.state,
          result: event.data.result
        },
        () => {
          this.props.onLoadEvent();
        }
      );
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.event.id !== prevState.id) {
      return {
        id: nextProps.event.id,
        state: nextProps.event.state
      };
    } else {
      return true;
    }
  }

  render() {
    let { id, state } = this.state;

    return (
      <div className="choices-container">
        {state !== "FINISHED" ? (
          <React.Fragment>
            <div className="button-container">
              <button
                className="button home"
                onClick={() => this.onChooseHandler(id, "home")}
              >
                Home Wins
              </button>
            </div>
            <div className="button-container">
              <button
                className="button draw"
                onClick={() => this.onChooseHandler(id, "draw")}
              >
                Draw
              </button>
            </div>
            <div className="button-container">
              <button
                className="button away"
                onClick={() => this.onChooseHandler(id, "away")}
              >
                Away Wins
              </button>
            </div>
          </React.Fragment>
        ) : (
          <div className="match-over-container">
            <button
              className="button next"
              onClick={() => this.props.onLoadEvent()}
            >
              Next
            </button>
            <h2 className="message">The match is over, you are to late :(</h2>
          </div>
        )}
      </div>
    );
  }
}

export default Choices;
