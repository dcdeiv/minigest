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
        pwChangeSuccess: payload,
        pwChangeError: false,
      };
    }

    case C.AUTH_PWCHANGE_FAIL: {
      return {
        ...state,
        pwChangeSuccess: false,
        pwChangeError: payload,
      };
    }

    case C.AUTH_PWCHANGE_END: {
      return {
        ...state,
        pwChangeSuccess: false,
        pwChangeError: false,
      };
    }

    case C.AUTH_GET_LOGGEDIN_USER_START: {
      return {
        ...state,
        getting: true,
        getError: false,
        dettagli: {},
      };
    }

    case C.AUTH_GET_LOGGEDIN_USER_SUCCESS: {
      return {
        ...state,
        dettagli: payload,
        getError: false,
        getting: false,
      };
    }

    case C.AUTH_GET_LOGGEDIN_USER_FAIL: {
      return {
        ...state,
        dettagli: {},
        getError: payload,
        getting: false,
      };
    }

    case C.AUTH_PUT_LOGGEDIN_USER_START: {
      return {
        ...state,
        putting: true,
        putError: false,
      };
    }

    case C.AUTH_PUT_LOGGEDIN_USER_FAIL: {
      return {
        ...state,
        putError: payload,
        putting: false,
      };
    }

    case C.AUTH_PUT_LOGGEDIN_USER_SUCCESS: {
      return {
        ...state,
        putError: false,
        dettagli: {
          ...state.dettagli,
          ...payload,
        },
        putting: false,
      };
    }

    default: {
      return state;
    }
  }
}
