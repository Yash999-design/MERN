import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-mern-backend-by-sunny.herokuapp.com/",
});

export default instance;
