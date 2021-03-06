import { actionCreator } from "src/state/actions";
import * as C from "src/constants";
import { api } from "src/helpers";

export const putStart = () => {
  return actionCreator(C.USER_PUT_START);
};

export const putSuccess = (data) => {
  return actionCreator(C.USER_PUT_SUCCESS, data);
};

export const putFail = (data) => {
  return actionCreator(C.USER_PUT_FAIL, data);
};

export const put = (object) => {
  let { id } = object;
  delete object["id"];

  return (dispatch) => {
    dispatch(putStart());

    api
      .patch(`${C.USER_API_ENDPOINT}${id}/`, object)
      .then((response) => {
        dispatch(putSuccess(response.data));
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        } else if (error.request) {
          console.log(error.request);
        }

        dispatch(putFail(error.message));
      });
  };
};
