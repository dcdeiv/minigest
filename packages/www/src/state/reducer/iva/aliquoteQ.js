import { initialCURDresults } from "src/state/initials";
import * as C from "src/constants";

export default function aliquoteQ(state = initialCURDresults, action) {
  let { type, payload } = action;

  switch (type) {
    case C.IVA_ALIQUOTE_Q_GET_START: {
      return {
        ...state,
        getting: true,
        getError: false,
      };
    }

    case C.IVA_ALIQUOTE_Q_GET_FAIL: {
      return {
        ...state,
        getError: payload,
        getting: false,
      };
    }

    case C.IVA_ALIQUOTE_Q_GET_SUCCESS: {
      return {
        ...state,
        results: [...payload],
        getError: false,
        getting: false,
      };
    }

    default: {
      return state;
    }
  }
}
