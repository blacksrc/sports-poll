import React, { Component } from "react";
import { withTheme } from "@callstack/react-theme-provider";
import "./asset/Choices.scss";
import EventModel from "./../../api/Event";

class Choices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.event.id,
      state: this.props.event.state,
      result: this.props.event.result
    };
  }

  onChooseHandler(id, result) {
    this.setState({
      result: result
    });

    new EventModel().voteEvent(id, result, event => {
      setTimeout(() => {
        this.setState(
          {
            state: event.data.state,
            result: event.data.result
          },
          () => {
            this.props.onLoadEvent();
          }
        );
      }, 1000);
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.event.id !== prevState.id) {
      return {
        id: nextProps.event.id,
        state: nextProps.event.state,
        result: nextProps.event.result
      };
    } else {
      return true;
    }
  }

  render() {
    let { id, state, result } = this.state;
    let checkedImage = this.props.theme.images.CHECKED;

    return (
      <div className="choices-container">
        {state !== "FINISHED" ? (
          <React.Fragment>
            <div className="button-container">
              <img
                src={checkedImage}
                className={`check-image ${result == `home` ? `` : `disable`}`}
                onClick={() => this.onChooseHandler(id, "home")}
              />
              <br />
              Home Wins
            </div>
            <div className="button-container">
              <img
                src={checkedImage}
                className={`check-image ${result == `draw` ? `` : `disable`}`}
                onClick={() => this.onChooseHandler(id, "draw")}
              />
              <br />
              Draw
            </div>
            <div className="button-container">
              <img
                src={checkedImage}
                className={`check-image ${result == `away` ? `` : `disable`}`}
                onClick={() => this.onChooseHandler(id, "away")}
              />
              <br />
              Away Wins
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

export default withTheme(Choices);
