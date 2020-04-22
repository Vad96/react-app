import authorReducer from "./authorReducer";
import * as actions from "../actions/authorActions";

it("should load data when LOAD_AUTHORS_SUCCESS", () => {
const initialState = [
    { id: 1, author: "A" },
    { id: 2, author: "B" },
    { id: 3, author: "C" }
];

  const action = actions.loadAuthorsSuccess(initialState);
  const newState = authorReducer(initialState, action);
  
  expect(newState[0].author).toEqual("A");
  expect(newState[1].author).toEqual("B");
  expect(newState[2].author).toEqual("C");
  expect(newState.length).toEqual(3);
});
