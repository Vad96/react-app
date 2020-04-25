//@flow

import * as authorApi from "../../api/authorApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";
import type { Dispatch } from 'redux';

type ThunkAction = (dispatch: Dispatch) => Array<Object>;
type Action = { type: "LOAD_AUTHORS_SUCCESS", authors: Array<Object> };

export function loadAuthorsSuccess(authors: Array<Object>): Action {
  return { type: "LOAD_AUTHORS_SUCCESS", authors };
}

export function loadAuthors() {
  return function(dispatch: ThunkAction) {
    dispatch(beginApiCall());
    return authorApi
      .getAuthors()
      .then(authors => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
