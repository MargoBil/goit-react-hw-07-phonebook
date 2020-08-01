import * as actions from './index';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:2000';

const addName = ({name, number}) => async dispatch => {
  try {
    dispatch(actions.addNameRequest());
    const {data} = await axios.post('/contacts', {name, number});
    dispatch(actions.addNameSuccess(data));
  } catch (error) {
    dispatch(actions.addNameFailure(error));
  }
};

const fetchNames = () => async dispatch => {
  try {
    dispatch(actions.fetchNamesRequest());
    const {data} = await axios.get('/contacts');
    dispatch(actions.fetchNamesSuccess(data));
  } catch (error) {
    dispatch(actions.fetchNamesFailure(error));
  }
};

const deleteName = id => async dispatch => {
  try {
    dispatch(actions.deleteNameRequest());
    await axios.delete(`/contacts/${id}`);
    dispatch(actions.deleteNameSuccess(id));
  } catch (error) {
    dispatch(actions.deleteNameFailure(error));
  }
};

const toggleTheme = themeColor => async dispatch => {
  try {
    dispatch(actions.toggleThemeRequest());
    const {data} = await axios.put('/theme', {themeColor: themeColor});
    dispatch(actions.toggleThemeSuccess(data));
  } catch (error) {
    dispatch(actions.toggleThemeFailure(error));
  }
};

const fetchTheme = () => async dispatch => {
  try {
    dispatch(actions.fetchThemeRequest());
    const {data} = await axios.get('/theme');
    dispatch(actions.fetchThemeSuccess(data.themeColor));
  } catch (error) {
    dispatch(actions.fetchThemeFailure(error));
  }
};

export default {
  addName,
  fetchNames,
  deleteName,
  toggleTheme,
  fetchTheme,
};
