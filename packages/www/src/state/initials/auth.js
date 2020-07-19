let initialState = {
  id: false,
  error: false,
  message: null,
  pwChangeError: false,
  pwChangeSuccess: false,
  getting: true,
  getError: false,
  putting: false,
  putError: false,
  dettagli: {},
};

if (process.env.NODE_ENV === "development") {
  initialState = {
    ...initialState,
    id: 1,
    error: false,
    message: null,
  };
} else {
  initialState = {
    ...initialState,
    id: window.auth.id === "false" ? false : JSON.parse(window.auth.id),
    error: window.auth.error === "false" ? false : true,
    message: window.auth.message === "" ? null : window.auth.message,
  };
}

export const initialAuthState = initialState;
