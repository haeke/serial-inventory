import axios from "axios";

// We are seting the baseURL to the json-server's local host and port for now.
export default axios.create({
  baseURL: "http://localhost:3002"
});
