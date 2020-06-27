import { actionCreator } from "~/store/actions";
import * as C from "~/constants";
import { api } from "~/helpers";

export const getSuccess = (data) => {
  return actionCreator(C.USER_GET_SUCCESS, data);
};

export const getFail = (data) => {
  return actionCreator(C.USER_GET_FAIL, data);
};

export const get = (id) => {
  return (dispatch) => {
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