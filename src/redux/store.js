import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

import {contactsReducer, themeReducer} from './reducers/rootReducer';

const defaultMiddleware = getDefaultMiddleware();

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    theme: themeReducer,
  },
  middleware: [...defaultMiddleware]
});

export default store;
