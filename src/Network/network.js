import axios from "axios";

const instance = axios.create({
  baseURL: "https://apimocha.com/truemind/schemes",
  headers: {},
});

export default instance;
