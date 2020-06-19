import * as C from "~/constants";

const initialState = {
  getting: true,
  getError: false,
  putting: false,
  putError: false,
  data: {},
};

export default function dettagli(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case C.IMPRESE_DETTAGLI_GET_START: {
      return {
        ...state,
        getting: true,
        getError: false,
      };
    }

    case C.IMPRESE_DETTAGLI_GET_FAIL: {
      return {
        ...state,
        getError: payload,
        getting: false,
      };
    }

    case C.IMPRESE_DETTAGLI_GET_SUCCESS: {
      return {
        ...state,
        data: payload,
        getError: false,
        getting: false,
      };
    }

    default: {
      return state;
    }
  }
}
