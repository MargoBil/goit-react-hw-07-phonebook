import {createAction} from '@reduxjs/toolkit';
import * as action from './actions';

export const addNameRequest = createAction(action.ADD_REQUEST);
export const addNameSuccess = createAction(action.ADD_SUCCESS);
export const addNameFailure = createAction(action.ADD_FAILURE);

export const fetchNamesRequest = createAction(action.FETCH_REQUEST);
export const fetchNamesSuccess = createAction(action.FETCH_SUCCESS);
export const fetchNamesFailure = createAction(action.FETCH_FAILURE);

export const deleteNameRequest = createAction(action.DELETE_REQUEST);
export const deleteNameSuccess = createAction(action.DELETE_SUCCESS);
export const deleteNameFailure = createAction(action.DELETE_FAILURE);

export const toggleThemeRequest = createAction(action.TOGGLE_THEME_REQUEST);
export const toggleThemeSuccess = createAction(action.TOGGLE_THEME_SUCCESS);
export const toggleThemeFailure = createAction(action.TOGGLE_THEME_FAILURE);

export const fetchThemeRequest = createAction(action.FETCH_THEME_REQUEST);
export const fetchThemeSuccess = createAction(action.FETCH_THEME_SUCCESS);
export const fetchThemeFailure = createAction(action.FETCH_THEME_FAILURE);

export const changeFilter = createAction(action.CHANGE_FILTER);
