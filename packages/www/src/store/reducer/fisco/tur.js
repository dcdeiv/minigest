import { findIndex } from "lodash";
import { initialCURDresults } from "~/store/initials";
import * as C from "~/constants";

export default function tur(state = initialCURDresults, action) {
  let { type, payload } = action;

  switch (type) {
    case C.TUR_GET_START: {
      return {
        ...state,
        getting: true,
        getError: false,
      };
    }

    case C.TUR_GET_FAIL: {
      return {
        ...state,
        getError: payload,
        getting: false,
      };
    }

    case C.TUR_GET_SUCCESS: {
      return {
        ...state,
        results: [...payload],
        getError: false,
        getting: false,
      };
    }

    case C.TUR_POST_START: {
      return {
        ...state,
        posting: true,
        postError: false,
      };
    }

    case C.TUR_POST_FAIL: {
      return {
        ...state,
        postError: payload,
        posting: false,
      };
    }

    case C.TUR_POST_SUCCESS: {
      return {
        ...state,
        results: [payload, ...state.results],
        postError: false,
        posting: false,
      };
    }

    case C.TUR_PUT_START: {
      return {
        ...state,
        putting: true,
        putError: false,
      };
    }

    case C.TUR_PUT_FAIL: {
      return {
        ...state,
        putError: payload,
        putting: false,
      };
    }

    case C.TUR_PUT_SUCCESS: {
      let { id } = payload;
      let index = findIndex(
        state.results,
        (o) => parseInt(o.id) === parseInt(id)
      );
      let newResults = [...state.results];
      newResults[index] = payload;

      return {
        ...state,
        results: newResults,
        putError: false,
        putting: false,
      };
    }

    case C.TUR_REMOVE_START: {
      return {
        ...state,
        removing: true,
        removeError: false,
      };
    }

    case C.TUR_REMOVE_FAIL: {
      return {
        ...state,
        removeError: payload,
        removing: false,
      };
    }

    case C.TUR_REMOVE_SUCCESS: {
      return {
        ...state,
        results: state.results.filter(
          (o) => parseInt(o.id) !== parseInt(payload)
        ),
      };
    }

    default: {
      return state;
    }
  }
}
