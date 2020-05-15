//@flow

import * as types from "../actions/actionTypes";
import initialState from "./initialState";

type courseObj = {
    id: number,
    title: string,
    authorId: number,
    category: string
}

type State = {
    courses: Array<{
    id: number,
    title: string,
    slug: string,
    authorId: number,
    category: string,
    authorName: string,
    course: courseObj,
  }>,
}

type Action = {
    type: string,
    action: Array<State> 
}
    
export default function courseReducer(state: Array<State> = initialState.courses, action: Action): Array<State> {
  switch (action.type) {
    case typeof types.CREATE_COURSE_SUCCESS:
      return [...state, { ...action.course }];
    case typeof types.UPDATE_COURSE_SUCCESS:
      return state.map(course =>
        course.id === action.course.id ? action.course : course
      );
    case typeof types.LOAD_COURSES_SUCCESS:
      return action.courses;
    case typeof types.DELETE_COURSE_OPTIMISTIC:
      return state.filter(course => course.id !== action.course.id);
    default:
      return state;
  }
}
