import { retrieveResults } from "src/state/initials";
import * as C from "src/constants";

export default function impreseList(state = retrieveResults, action) {
  let { type, payload } = action;

  switch (type) {
    case C.IMPRESE_LIST_START: {
      return {
        ...state,
        getting: true,
        getError: false,
      };
    }

    case C.IMPRESE_LIST_FAIL: {
      return {
        ...state,
        getError: payload,
        getting: false,
      };
    }

    case C.IMPRESE_LIST_SUCCESS: {
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
