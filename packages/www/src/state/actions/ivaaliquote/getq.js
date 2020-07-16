import { actionCreator } from "src/state/actions";
import * as C from "src/constants";
import { api } from "src/helpers";

export const getQstart = () => {
  return actionCreator(C.IVA_ALIQUOTE_Q_GET_START);
};

export const getQfail = (data) => {
  return actionCreator(C.IVA_ALIQUOTE_Q_GET_FAIL, data);
};

export const getQsuccess = (data) => {
  return actionCreator(C.IVA_ALIQUOTE_Q_GET_SUCCESS, data);
};

export const getQ = (data = null) => {
  let qdata = data ? `${data}/` : "";

  return (dispatch) => {
    dispatch(getQstart());

    api
      .get(`${C.IVA_ALIQUOTE_Q_API_ENDPOINT}${qdata}`)
      .then((response) => {
        dispatch(getQsuccess(response.data));
      })
      .catch((error) => {
        dispatch(getQfail(error.message));
      });
  };
};
