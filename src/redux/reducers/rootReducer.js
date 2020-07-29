import {combineReducers} from 'redux';

import {items, filter} from './contactsReducer';
import {themeColor} from './themeReducer';

export const contactsReducer = combineReducers({
  items,
  filter,
});

export const themeReducer = combineReducers({
  themeColor,
});
