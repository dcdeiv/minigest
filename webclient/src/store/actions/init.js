import { ivaAliquote } from "./ivaaliquote";

export function init() {
  return (dispatch) => {
    dispatch(ivaAliquote.get());
  };
}
