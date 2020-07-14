import { actionCreator } from "src/state/actions";
import * as C from "src/constants";
import { api } from "src/helpers";

export const pwChangeSuccess = (data) => {
  return actionCreator(C.AUTH_PWCHANGE_SUCCESS, data);
};

export const pwChangeFail = (data) => {
  return actionCreator(C.AUTH_PWCHANGE_FAIL, data);
};

export const pwChange = (passwords) => {
  return (dispatch) => {
    api
      .put(C.AUTH_PWCHANGE_API_ENDPOINT, passwords)
      .then((response) => {
        dispatch(pwChangeSuccess(response.data));
      })
      .catch((error) => {
        dispatch(pwChangeFail(error.message));
      });
  };
};

export const pwChangeDismiss = (data) => {
  const action = () => {
    return actionCreator(C.AUTH_PWCHANGE_END);
  };

  return (dispatch) => {
    dispatch(action());
  };
};
