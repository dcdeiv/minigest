import { actionCreator } from "~/store/actions";
import * as C from "~/constants";
import { api } from "~/helpers";

export const putStart = () => {
  return actionCreator(C.INTERESSI_LEGALI_PUT_START);
};

export const putFail = (data) => {
  return actionCreator(C.INTERESSI_LEGALI_PUT_FAIL, data);
};

export const putSuccess = (data) => {
  return actionCreator(C.INTERESSI_LEGALI_PUT_SUCCESS, data);
};

export const put = (object) => {
  const { id } = object;
  delete object["id"];

  return (dispatch) => {
    dispatch(putStart);

    api
      .put(`${C.INTERESSI_LEGALI_API_ENDPOINT}${id}/`, object)
      .then((response) => {
        dispatch(putSuccess(response.data));
      })
      .catch((error) => {
        dispatch(putFail(error.message));
      });
  };
};
