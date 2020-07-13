import { actionCreator } from "src/state/actions";
import * as C from "src/constants";
import { api } from "src/helpers";

export const pwchangeSuccess = (data) => {
  return actionCreator(C.AUTH_PWCHANGE_SUCCESS);
};

export const pwchangeFail = (data) => {
  return actionCreator(C.AUTH_PWCHANGE_FAIL, data);
};

export const pwchange = (passwords) => {
  return (dispatch) => {
    api
      .put(C.AUTH_PWCHANGE_API_ENDPOINT, passwords)
      .then((response) => {
        console.log(response);
        dispatch(pwchangeSuccess());
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        } else if (error.request) {
          console.log(error.request);
        }

        dispatch(pwchangeFail(error.message));
      });
  };
};
