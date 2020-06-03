import { ivaAliquote } from "~/store/initials";
import * as C from "~/constants";

export default function aliquoteQ(state = ivaAliquote, action) {
  let { type, payload } = action;

  switch (type) {
    case C.IVA_ALIQUOTE_Q_GET_START: {
      return {
        ...state,
        getting: true,
      };
    }

    case C.IVA_ALIQUOTE_Q_GET_FAIL: {
      return {
        ...state,
        getting: false,
        error: payload,
      };
    }

    case C.IVA_ALIQUOTE_Q_GET_SUCCESS: {
      return {
        ...state,
        getting: false,
        results: [...payload],
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
}
