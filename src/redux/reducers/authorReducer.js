//@flow

import * as types from "../actions/actionTypes";
import initialState from "./initialState";

type State = {
    authors: Array<{
        id: number,
        name: string,
    }>,
}

type Authors = {    
    id: number,
    name: string,
}

type Action = { type: "LOAD_AUTHORS_SUCCESS", authors: Array<Authors> };

export default function authorReducer(state: State = initialState.authors, action: Action) {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}
