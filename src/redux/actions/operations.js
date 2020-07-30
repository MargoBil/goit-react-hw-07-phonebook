import * as actions from './index';
import axios from 'axios';

const addName = ({name, number}) => dispatch => {
  dispatch(actions.addNameRequest());
  axios
    .get('http://localhost:2000/contacts')
    .then(({data}) => {
      const contacts = data;
      const findIdenticalName = contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      );
      if (!findIdenticalName) {
        axios
          .post('http://localhost:2000/contacts', {name, number})
          .then(({data}) => {
            dispatch(actions.addNameSuccess(data));
          })
          .catch(error => dispatch(actions.addNameFailure(error)));
      } else {
        alert('This name already exists!');
      }
    })
    .catch(error => error);
};

const fetchNames = () => dispatch => {
  dispatch(actions.fetchNamesRequest);
  axios
    .get('http://localhost:2000/contacts')
    .then(({data}) => {
      dispatch(actions.fetchNamesSuccess(data));
    })
    .catch(error => dispatch(actions.fetchNamesFailure(error)));
};

const deleteName = id => dispatch => {
  dispatch(actions.deleteNameRequest);
  axios
    .delete(`http://localhost:2000/contacts/${id}`)
    .then(() => {
      dispatch(actions.deleteNameSuccess(id));
    })
    .catch(error => dispatch(actions.deleteNameFailure(error)));
};

const toggleTheme = () => dispatch => {
  dispatch(actions.toggleThemeRequest);
  axios
    .get('http://localhost:2000/theme/')
    .then(({data}) => {
      let currentThemeColor;
      data.themeColor === 'Light'
        ? (currentThemeColor = 'Dark')
        : (currentThemeColor = 'Light');
      axios
        .put('http://localhost:2000/theme/', {themeColor: currentThemeColor})
        .then(({data}) => {
          dispatch(actions.toggleThemeSuccess(data.themeColor));
        })
        .catch(error => dispatch(actions.toggleThemeFailure(error)));
    })
    .catch(error => error);
};

const fetchTheme = () => dispatch => {
  dispatch(actions.fetchThemeRequest);
  axios
    .get('http://localhost:2000/theme')
    .then(({data}) => {
      dispatch(actions.fetchThemeSuccess(data.themeColor));
    })
    .catch(error => dispatch(actions.fetchThemeFailure(error)));
};

export default {
  addName,
  fetchNames,
  deleteName,
  toggleTheme,
  fetchTheme,
};
