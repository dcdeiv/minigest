import { initialAuthState } from "src/state/initials";
import * as C from "src/constants";

// Reducer
export default function auth(state = initialAuthState, action) {
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

    case C.AUTH_PWCHANGE_SUCCESS: {
      return {
        ...state,
        pwchangeSuccess: "Password cambiata con successo!",
      };
    }

    case C.AUTH_PWCHANGE_FAIL: {
      return {
        ...state,
        pwchangeError: payload,
      };
    }

    default: {
      return state;
    }
  }
}
