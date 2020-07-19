import { actionCreator } from "src/state/actions";
import * as C from "src/constants";
import { api } from "src/helpers";

export const getStart = () => {
  return actionCreator(C.IMPRESE_GET_START);
};

export const getSuccess = (data) => {
  return actionCreator(C.IMPRESE_GET_SUCCESS, data);
};

export const getFail = (data) => {
  return actionCreator(C.IMPRESE_GET_FAIL, data);
};

export const get = (id) => {
  return (dispatch) => {
    dispatch(getStart());

    api
      .get(`${C.IMPRESE_API_ENDPOINT}${id}/`)
      .then((response) => {
        dispatch(getSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getFail(error.message));
      });
  };
};
