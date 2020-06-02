import axios from "axios";

const api = axios.create({
  baseURL: "/api/",
  xsrfHeaderName: "X-CSRFTOKEN",
  xsrfCookieName: "csrftoken",
});

if (process.env.NODE_ENV === `development`) {
  api.defaults.withCredentials = true;
}

export default api;
