import * as types from "../actions/actionTypes";
import initialState from "./initialState";

type State = {
    courses: Array<{
    id: number,
    title: string,
    slug: string,
    authorId: number,
    category: string,
    authorName: string,
    course: any
  }>,
}

type Action =
  | { type: 'CREATE_COURSE_SUCCESS', action: Array<State> }
  | { type: 'UPDATE_COURSE_SUCCESS', action: Array<State> }
  | { type: 'LOAD_COURSES_SUCCESS', action: Array<State> }
  | { type: 'DELETE_COURSE_OPTIMISTIC', action: Array<State> };
  
export default function courseReducer(state: Array<State> = initialState.courses, action: Action): Array<State> {
  switch (action.type) {
    case types.CREATE_COURSE_SUCCESS:
      return [...state, { ...action.course }];
    case types.UPDATE_COURSE_SUCCESS:
      return state.map(course =>
        course.id === action.course.id ? action.course : course
      );
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    case types.DELETE_COURSE_OPTIMISTIC:
      return state.filter(course => course.id !== action.course.id);
    default:
      return state;
  }
}
