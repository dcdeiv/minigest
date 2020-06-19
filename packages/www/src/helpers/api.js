import axios from "axios";

const api = axios.create({
  xsrfHeaderName: "X-CSRFTOKEN",
  xsrfCookieName: "csrftoken",
  responseType: "json",
});

if (process.env.NODE_ENV === "development") {
  api.defaults.baseURL = "http://127.0.0.1:8000";
  api.defaults.withCredentials = true;
}

api.interceptors.response.use(
  (response) => {
    // Respinge tutte le risposte che non sono json
    return response.headers["content-type"] === "application/json"
      ? response
      : Promise.reject(new Error("Risorsa non trovata!"));
  },
  (error) => Promise.reject(error)
);

export default api;
