import authorReducer from "./authorReducer";
import * as actions from "../actions/authorActions";

it("should load data when LOAD_AUTHORS_SUCCESS", () => {
const initialState = [
    { id: 1, title: "A" },
    { id: 2, title: "B" },
    { id: 3, title: "C" }
];

  const action = actions.loadAuthorsSuccess(initialState);
  const newState = authorReducer(initialState, action);
  
  expect(newState.length).toEqual(3);
});
