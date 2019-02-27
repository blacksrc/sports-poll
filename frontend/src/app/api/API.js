import axios from "axios";
import { api } from "./../config/config";

class API {
  constructor(domain = api.domain, port = api.port) {
    this.domain = domain;
    this.port = port;
  }

  request(path, passedParams, callback) {
    let defaultHeader = {
      "Content-Type": "application/json"
    };

    passedParams.headers = Object.assign(
      {},
      defaultHeader,
      passedParams.headers
    );
    const params = Object.assign(
      {},
      {
        baseURL: this.createBaseUrl(this.domain, this.port),
        url: path,
        method: "GET",
        data: {},
        headers: {},
        timeout: 5000
      },
      passedParams
    );

    axios(params).then(
      response => callback(this.preperResponse(response)),
      error => callback(this.preperResponse(error.response))
    );
  }

  preperResponse(response) {
    if (!response) {
      return {
        status: 500,
        statusText: "",
        data: null
      };
    } else {
      return {
        status: response.status,
        statusText: response.statusText,
        data: response.data
      };
    }
  }

  createBaseUrl(domain, port) {
    return `${domain}:${port}/`;
  }
}

export default API;
