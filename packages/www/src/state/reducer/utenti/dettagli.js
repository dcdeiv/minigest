import { initialCURDdetails } from "src/state/initials";
import * as C from "src/constants";

// Reducer
export default function dettagliUtente(state = initialCURDdetails, action) {
  let { type, payload } = action;

  switch (type) {
    case C.USER_GET_SUCCESS: {
      return {
        ...state,
        dettagli: payload,
        getError: false,
        getting: false,
      };
    }

    case C.USER_GET_FAIL: {
      return {
        ...state,
        dettagli: {},
        getError: payload,
        getting: false,
      };
    }

    case C.USER_PUT_START: {
      return {
        ...state,
        putting: true,
        putError: false,
      };
    }

    case C.USER_PUT_FAIL: {
      return {
        ...state,
        putError: payload,
        putting: false,
      };
    }

    case C.USER_PUT_SUCCESS: {
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
