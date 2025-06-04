import axios from "axios";

const request = axios.create({
  baseURL: "https://keldibekov.online",
});

request.interceptors.request.use((config) => {
  config.headers.Authorization = "Bearer hdgadjlasdobasdbalsbdlad";

  return config;
});

export { request };
