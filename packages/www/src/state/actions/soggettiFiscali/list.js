import { actionCreator } from "src/state/actions";
import * as C from "src/constants";
import { api } from "src/helpers";

export const listStart = () => {
  return actionCreator(C.SOGGETTI_FISCALI_LIST_START);
};

export const listSuccess = (data) => {
  return actionCreator(C.SOGGETTI_FISCALI_LIST_SUCCESS, data);
};

export const listFail = (data) => {
  return actionCreator(C.SOGGETTI_FISCALI_LIST_FAIL, data);
};

export const list = () => {
  return (dispatch) => {
    dispatch(listStart());

    api
      .get(`${C.SOGGETTI_FISCALI_API_ENDPOINT}`)
      .then((response) => {
        dispatch(listSuccess(response.data));
      })
      .catch((error) => {
        dispatch(listFail(error.message));
      });
  };
};
