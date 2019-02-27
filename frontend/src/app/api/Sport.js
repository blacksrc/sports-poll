import API from "./API";

class Sport extends API {
  fetchSports(callback) {
    this.request("/sports", {}, data => {
      callback(data);
    });
  }
}

export default Sport;
