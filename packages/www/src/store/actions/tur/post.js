import { actionCreator } from "~/store/actions";
import * as C from "~/constants";
import { api } from "~/helpers";

export const postStart = () => {
  return actionCreator(C.TUR_POST_START);
};

export const postFail = (data) => {
  return actionCreator(C.TUR_POST_FAIL, data);
};

export const postSuccess = (data) => {
  return actionCreator(C.TUR_POST_SUCCESS, data);
};

export const post = (object) => {
  return (dispatch) => {
    dispatch(postStart);

    api
      .post(C.TUR_API_ENDPOINT, object)
      .then((response) => {
        dispatch(postSuccess(response.data));
      })
      .catch((error) => {
        dispatch(postFail(error.message));
      });
  };
};
