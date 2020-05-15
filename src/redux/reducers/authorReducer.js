//@flow

import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import type { Authors } from '../../types/types.js';

type State = {|
    authors: Array<Authors>,
|}

type Action = {| type: "LOAD_AUTHORS_SUCCESS", authors: Array<Authors> |};

export default function authorReducer(state: State = initialState.authors, action: Action) {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}
