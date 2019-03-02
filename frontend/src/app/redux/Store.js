import { createStore } from "redux";
import rootReducer from "./Reducer";
import { loadState, saveState } from "./../util";

const persistedState = loadState() || {};
let store = createStore(rootReducer, persistedState);

store.subscribe(() => {
	saveState(store.getState());
});

export default store;
