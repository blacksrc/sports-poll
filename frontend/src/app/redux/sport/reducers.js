import { SET_SPORTS } from "./types";

let initialState = [];

const sportReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SPORTS:
      return action.payload;

    default:
      return state;
  }
};

export default sportReducer;
