import { actionCreator } from "~/store/actions";
import * as C from "~/constants";
import { api } from "~/helpers";

export const getStart = () => {
  return actionCreator(C.IVA_ALIQUOTE_GET_START);
};

export const getFail = (data) => {
  return actionCreator(C.IVA_ALIQUOTE_GET_FAIL, data);
};

export const getSuccess = (data) => {
  return actionCreator(C.IVA_ALIQUOTE_GET_SUCCESS, data);
};

export const get = () => {
  return (dispatch) => {
    dispatch(getStart);

    api
      .get(C.IVA_ALIQUOTE_API_ENDPOINT)
      .then((response) => {
        dispatch(getSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getFail(error.message));
      });
  };
};
