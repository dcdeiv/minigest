import * as C from "~/constants";

const initialState = {
  getting: true,
  getError: false,
  dettagli: {},
};

// Reducer
export default function utente(state = initialState, action) {
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

    default: {
      return {
        ...state,
      };
    }
  }
}
