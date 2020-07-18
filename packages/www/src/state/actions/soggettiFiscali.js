import { actionCreator } from "src/state/actions";
import * as C from "src/constants";
import { api } from "src/helpers";

export const getSuccess = (data) => {
  return actionCreator(C.SOGGETTI_FISCALI_GET_SUCCESS, data);
};

export const getFail = (data) => {
  return actionCreator(C.SOGGETTI_FISCALI_GET_FAIL, data);
};

export const get = (id) => {
  return (dispatch) => {
    api
      .get(`${C.SOGGETTI_FISCALI_API_ENDPOINT}`)
      .then((response) => {
        dispatch(getSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getFail(error.message));
      });
  };
};
