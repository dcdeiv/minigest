import { actionCreator } from "~/store/actions";
import * as C from "~/constants";
import { api } from "~/helpers";

export const getStart = () => {
  return actionCreator(C.IMPRESE_DETTAGLI_GET_START);
};

export const getFail = (data) => {
  return actionCreator(C.IMPRESE_DETTAGLI_GET_FAIL, data);
};

export const getSuccess = (data) => {
  return actionCreator(C.IMPRESE_DETTAGLI_GET_SUCCESS, data);
};

export const get = (id) => {
  return (dispatch) => {
    dispatch(getStart);

    api
      .get(`${C.IMPRESE_DETTAGLI_API_ENDPOINT}${id}/`)
      .then((response) => {
        dispatch(getSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getFail(error.message));
      });
  };
};
