import axios from 'axios';

const BaseURL = process.env.REACT_APP_API_ENDPOINT;

export default class Request {

  static GET(endPoint, URL) {
    if (URL !== undefined) {
      return axios.get(`${URL}`);
    }
    return axios.get(`${BaseURL}${endPoint}`);

  }

  static POST(endPoint, payload, URL) {
    if (URL !== undefined) {
      return axios.post(`${URL}`, payload);
    }
    return axios.post(`${BaseURL}${endPoint}`, payload);

  }
}