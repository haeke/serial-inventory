import axios from "axios";

let baseURL = "http://localhost:3002";

if (process.env.NODE_ENV === "production") {
  baseURL = "https://serial-inventory-json-server.herokuapp.com";
}

// We are seting the baseURL to the json-server's local host and port for now.
export default axios.create({
  baseURL: baseURL
});
