import axios from "axios";

const api = axios.create({
  xsrfHeaderName: "X-CSRFTOKEN",
  xsrfCookieName: "csrftoken",
});

if (process.env.NODE_ENV === "development") {
  api.defaults.baseURL = "http://127.0.0.1:8000";
  api.defaults.withCredentials = true;
}

export default api;
