import {createReducer} from '@reduxjs/toolkit';

import * as actions from '../actions';

const onAddName = (state, action) => {
  return [...state, action.payload];
};

const onDeleteContact = (state, action) => {
  return state.filter(contact => contact.id !== action.payload);
};

const onChangeFilter = (_, action) => action.payload;

const onFetchNames = (_, action) => action.payload;

export const items = createReducer([], {
  [actions.addNameSuccess]: onAddName,
  [actions.fetchNamesSuccess]: onFetchNames,
  [actions.deleteNameSuccess]: onDeleteContact,
});

export const filter = createReducer('', {
  [actions.changeFilter]: onChangeFilter,
});
