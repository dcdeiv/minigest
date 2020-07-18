import { retrieveResults } from "src/state/initials";
import * as C from "src/constants";

export default function soggettiFiscali(state = retrieveResults, action) {
  let { type, payload } = action;

  switch (type) {
    case C.SOGGETTI_FISCALI_GET_START: {
      return {
        ...state,
        getting: true,
        getError: false,
      };
    }

    case C.SOGGETTI_FISCALI_GET_FAIL: {
      return {
        ...state,
        getError: payload,
        getting: false,
      };
    }

    case C.SOGGETTI_FISCALI_GET_SUCCESS: {
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
