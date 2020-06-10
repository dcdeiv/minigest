import { actionCreator } from "~/store/actions";
import * as C from "~/constants";
import { api, history } from "~/helpers";

export const loginSuccess = (data) => {
  return actionCreator(C.AUTH_LOGIN_SUCCESS, data);
};

export const loginFail = (data) => {
  return actionCreator(C.AUTH_LOGIN_FAIL, data);
};

export const login = (object) => {
  return (dispatch) => {
    const next = object.next;
    delete object.next;

    api
      .post("/accedi/", object)
      .then((response) => {
        dispatch(loginSuccess(response.data));

        history.push(next);
      })
      .catch((error) => {
        let response = {
          user: false,
          status: {
            error: true,
            message: "Impossibile accedere! Errore sconosciuto!",
          },
        };

        if (error.response) {
          const { status } = error.response.data;

          response["status"] = status;
        } else if (error.request) {
          response["status"]["message"] =
            "Impossibile contattare il server! Riprova più tardi!";
        } else {
          response["status"]["message"] = `Errore: ${error.message}`;
        }

        dispatch(loginFail(response));
      });
  };
};
