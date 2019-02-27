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

  voteEvent(id, result, callback) {
    this.request("/vote", { 
      method: 'post',
      data: {id, result} 
    }, data => {
      callback(data);
    });
  }
}

export default EventModel;
