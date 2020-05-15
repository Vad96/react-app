//@flow

import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";
import type { Dispatch } from 'redux';
import type { CourseObj } from '../../types/types.js'
type ThunkAction = (dispatch: Dispatch) => void;

export function loadCourseSuccess(courses: Array<Object>) {
  return { type: "LOAD_COURSES_SUCCESS", courses};
}

export function createCourseSuccess(course: CourseObj) {
  return { type: "CREATE_COURSE_SUCCESS", course };
}

export function updateCourseSuccess(course: CourseObj) {
  return { type: "UPDATE_COURSE_SUCCESS", course };
}

export function deleteCourseOptimistic(course: CourseObj) {
  return { type: "DELETE_COURSE_OPTIMISTIC", course };
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
