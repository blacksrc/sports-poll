export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return {};
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return {};
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.log("Can not save state into local storage.");
  }
}

export const clearState = (state) => {
  try {
    localStorage.clear();
  } catch (err) {
    console.log("Can not clear state from local storage.");
  }
}

export function getSportTheme(sport) {
  switch (sport) {
    case "FOOTBALL":
      return '';
    case "SNOOKER":
      return '';
    case "HANDBALL":
      return '';
    case "ICE_HOCKEY":
      return '';
    case "TENNIS":
      return '';
    default:
      return '';
  }
}