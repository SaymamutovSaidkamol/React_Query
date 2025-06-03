import axios from "axios";

const request = axios.create({
  baseURL: "https://6764223a52b2a7619f5b899a.mockapi.io",
});

request.interceptors.request.use((config) => {
  config.headers.Authorization = "Bearer hdgadjlasdobasdbalsbdlad";

  return config;
});

export { request };
