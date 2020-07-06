import { initialAuthState } from "src/store/initials";
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

    default: {
      return state;
    }
  }
}
