import { ivaAliquote } from "~/store/initials";
import * as C from "~/constants";

export default function aliquote(state = ivaAliquote, action) {
  let { type, payload } = action;

  switch (type) {
    case C.IVA_ALIQUOTE_GET_START: {
      return {
        ...state,
        getting: true,
        getError: false,
      };
    }

    case C.IVA_ALIQUOTE_GET_FAIL: {
      return {
        ...state,
        getError: payload,
        getting: false,
      };
    }

    case C.IVA_ALIQUOTE_GET_SUCCESS: {
      return {
        ...state,
        results: [...payload],
        getError: false,
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
