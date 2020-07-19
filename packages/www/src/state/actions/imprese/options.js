import { actionCreator } from "src/state/actions";
import * as C from "src/constants";
import { api } from "src/helpers";

export const getOptionsStart = () => {
  return actionCreator(C.IMPRESE_OPTIONS_GET_START);
};

export const getOptionsSuccess = (data) => {
  return actionCreator(C.IMPRESE_OPTIONS_GET_SUCCESS, data);
};

export const getOptionsFail = (data) => {
  return actionCreator(C.IMPRESE_OPTIONS_GET_FAIL, data);
};

export const getOptions = () => {
  return (dispatch) => {
    dispatch(getOptionsStart());

    api
      .options(`${C.IMPRESE_API_ENDPOINT}`)
      .then((response) => {
        dispatch(getOptionsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getOptionsFail(error.message));
      });
  };
};
