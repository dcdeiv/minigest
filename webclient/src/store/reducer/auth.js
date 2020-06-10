import * as C from "~/constants";

// Crea lo state iniziale di Auth
let initialState = null;

// Se si è in sviluppo
if (process.env.NODE_ENV === "development") {
  initialState = {
    user: {
      id: 1,
      email: "email@example.com",
      is_staff: true,
    },
    status: {
      error: false,
      message: null,
    },
  };
} else {
  initialState = {
    user:
      window.response.user === "false"
        ? false
        : JSON.parse(window.response.user),
    status: JSON.parse(window.response.status),
  };
}

// Reducer
export default function auth(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case C.AUTH_LOGIN_SUCCESS: {
      return {
        ...state,
        ...payload,
      };
    }

    case C.AUTH_LOGIN_FAIL: {
      return {
        ...state,
        ...payload,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
}
