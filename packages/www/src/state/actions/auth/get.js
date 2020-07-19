import { actionCreator } from "src/state/actions";
import * as C from "src/constants";
import { api } from "src/helpers";

export const getStart = () => {
  return actionCreator(C.AUTH_GET_LOGGEDIN_USER_START);
};

export const getSuccess = (data) => {
  return actionCreator(C.AUTH_GET_LOGGEDIN_USER_SUCCESS, data);
};

export const getFail = (data) => {
  return actionCreator(C.AUTH_GET_LOGGEDIN_USER_FAIL, data);
};

export const get = (id) => {
  return (dispatch) => {
    dispatch(getStart());

    api
      .get(`${C.USER_API_ENDPOINT}${id}/`)
      .then((response) => {
        dispatch(getSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getFail(error.message));
      });
  };
};
