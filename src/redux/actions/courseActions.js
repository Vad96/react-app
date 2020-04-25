//@flow

import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";
import type { Dispatch } from 'redux';
type ThunkAction = (dispatch: Dispatch) => Array<Object>;

type CourseObj = {
    id: number,
    title: string,
    authorId: number,
    category: string
}

type Action = {
  type: "CREATE_COURSE_SUCCESS" | "UPDATE_COURSE_SUCCESS" | "DELETE_COURSE_OPTIMISTIC",
  course: Object,
}

type CoursesAction = {
    type: "LOAD_COURSES_SUCCESS",
    courses: Array<Object> 
}

export function loadCourseSuccess(courses: Array<Object>): CoursesAction {
  return { type: "LOAD_COURSES_SUCCESS", courses};
}

export function createCourseSuccess(course: CourseObj): Action {
  return { type: "CREATE_COURSE_SUCCESS", course: Object };
}

export function updateCourseSuccess(course: CourseObj): Action {
  return { type: "UPDATE_COURSE_SUCCESS", course: Object };
}

export function deleteCourseOptimistic(course: CourseObj): Action {
  return { type: "DELETE_COURSE_OPTIMISTIC", course: Object };
}

export function loadCourses() {
  return function(dispatch: Dispatch) {
    dispatch(beginApiCall());
    return courseApi
      .getCourses()
      .then(courses => {
        dispatch(loadCourseSuccess(courses));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveCourse(course: CourseObj) {
  return function(dispatch: Dispatch) {
    dispatch(beginApiCall());
    return courseApi
      .saveCourse(course)
      .then(savedCourse => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteCourse(course: CourseObj) {
  return function(dispatch: Dispatch) {
    dispatch(deleteCourseOptimistic(course));
    return courseApi.deleteCourse(course.id);
  };
}
