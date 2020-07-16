import { actionCreator } from "src/state/actions";
import * as C from "src/constants";
import { api } from "src/helpers";

export const removeStart = () => {
  return actionCreator(C.INTERESSI_LEGALI_REMOVE_START);
};

export const removeFail = (data) => {
  return actionCreator(C.INTERESSI_LEGALI_REMOVE_FAIL, data);
};

export const removeSuccess = (data) => {
  return actionCreator(C.INTERESSI_LEGALI_REMOVE_SUCCESS, data);
};

export const remove = (id) => {
  return (dispatch) => {
    dispatch(removeStart());

    api
      .delete(`${C.INTERESSI_LEGALI_API_ENDPOINT}${id}/`)
      .then((response) => {
        dispatch(removeSuccess(id));
      })
      .catch((error) => {
        dispatch(removeFail(error.message));
      });
  };
};
