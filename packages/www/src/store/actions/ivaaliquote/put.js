import { actionCreator } from "src/store/actions";
import * as C from "src/constants";
import { api } from "src/helpers";

export const putStart = () => {
  return actionCreator(C.IVA_ALIQUOTE_PUT_START);
};

export const putFail = (data) => {
  return actionCreator(C.IVA_ALIQUOTE_PUT_FAIL, data);
};

export const putSuccess = (data) => {
  return actionCreator(C.IVA_ALIQUOTE_PUT_SUCCESS, data);
};

export const put = (object) => {
  const { id } = object;
  delete object["id"];

  return (dispatch) => {
    dispatch(putStart);

    api
      .put(`${C.IVA_ALIQUOTE_API_ENDPOINT}${id}/`, object)
      .then((response) => {
        dispatch(putSuccess(response.data));
      })
      .catch((error) => {
        dispatch(putFail(error.message));
      });
  };
};
