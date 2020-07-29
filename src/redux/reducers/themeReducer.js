import {createReducer} from '@reduxjs/toolkit';

import * as actions from '../actions/index';

const onToggleTheme = (state, action) => action.payload;
const onFetchTheme = (state, action) => action.payload;

export const themeColor = createReducer('Light', {
  [actions.toggleThemeSuccess]: onToggleTheme,
  [actions.fetchThemeSuccess]: onFetchTheme
});
