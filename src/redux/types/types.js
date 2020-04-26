import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

export type State = {
    authors: Array<{
        id: number,
        name: string,
    }>,
}

export type Action =
 | CREATE_COURSE
 | LOAD_COURSES_SUCCESS
 | LOAD_AUTHORS_SUCCESS
 | CREATE_COURSE_SUCCESS
 | UPDATE_COURSE_SUCCESS
 | BEGIN_API_CALL
 | API_CALL_ERROR
 | DELETE_COURSE_OPTIMISTIC;

export type Store = ReduxStore<State, Action>;
export type ThunkedAction = (dispatch: Dispatch) => void;
