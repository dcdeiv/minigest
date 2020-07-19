import { initialOptionsRetrieve } from "src/state/initials";
import * as C from "src/constants";

export default function impreseOptions(state = initialOptionsRetrieve, action) {
  let { type, payload } = action;

  switch (type) {
    case C.IMPRESE_OPTIONS_GET_START: {
      return {
        ...state,
        getting: true,
        getError: false,
        options: {},
      };
    }

    case C.IMPRESE_OPTIONS_GET_FAIL: {
      return {
        ...state,
        getError: payload,
        getting: false,
      };
    }

    case C.IMPRESE_OPTIONS_GET_SUCCESS: {
      return {
        ...state,
        options: payload.actions.POST,
        getError: false,
        getting: false,
      };
    }

    default: {
      return state;
    }
  }
}
