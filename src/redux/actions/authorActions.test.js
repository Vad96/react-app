import * as authorActions from "./authorActions";
import * as types from "./actionTypes";
import { authors } from "../../../tools/mockData";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe("Load Courses Thunk", () => {
    it("should create BEGIN_API_CALL and LOAD_AUTHORS_SUCCESS when loading courses", () => {
      fetchMock.mock("*", {
        body: authors,
        headers: { "content-type": "application/json" }
      });

      const expectedActions = [
        { type: types.BEGIN_API_CALL },
        { type: types.LOAD_AUTHORS_SUCCESS, authors }
      ];

      const store = mockStore({ authors: [] });
      return store.dispatch(authorActions.loadAuthors()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
