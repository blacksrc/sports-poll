import { combineReducers } from "redux";
import sportReducer from "./sport/reducers";

const rootReducer = combineReducers({
	sport: sportReducer
});

export default rootReducer;
