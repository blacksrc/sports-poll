import API from "./API";

class EventModel extends API {
  constructor() {
    super();
  }

  fetchRandomEvent(callback) {
    this.request("/events?random", {}, data => {
      callback(data);
    });
  }
}

export default EventModel;
