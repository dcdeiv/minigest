import { initialCURDdetails } from "src/state/initials";
import * as C from "src/constants";

export default function impreseDettagli(state = initialCURDdetails, action) {
  let { type, payload } = action;

  switch (type) {
    case C.IMPRESE_GET_START: {
      return {
        ...state,
        getting: true,
        getError: false,
      };
    }

    case C.IMPRESE_GET_FAIL: {
      return {
        ...state,
        getError: payload,
        getting: false,
      };
    }

    case C.IMPRESE_GET_SUCCESS: {
      return {
        ...state,
        dettagli: payload,
        getError: false,
        getting: false,
      };
    }

    default: {
      return state;
    }
  }
}
