let initialState = {
  id: false,
  error: false,
  message: null,
};

if (process.env.NODE_ENV === "development") {
  initialState = {
    id: 1,
    error: false,
    message: null,
  };
} else {
  initialState = {
    id: window.auth.id === "false" ? false : JSON.parse(window.auth.id),
    error: window.auth.error === "false" ? false : true,
    message: window.auth.message === "" ? null : window.auth.message,
  };
}

export const initialAuthState = initialState;
