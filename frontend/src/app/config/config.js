import FOOTBALL from "./../assets/images/football.png";
import SNOOKER from "./../assets/images/billiard.png";
import HANDBALL from "./../assets/images/handball.png";
import ICE_HOCKEY from "./../assets/images/hockey.png";
import TENNIS from "./../assets/images/tennis.png";

export const api = {
  /* domain: process.env.REACT_APP_API_HOST,
  port: process.env.REACT_APP_API_PORT, */
  domain: "http://localhost",
  port: 3001,
};

export const theme = {
  images: {
    FOOTBALL: FOOTBALL,
    SNOOKER: SNOOKER,
    HANDBALL: HANDBALL,
    ICE_HOCKEY: ICE_HOCKEY,
    TENNIS: TENNIS,
  },
}
