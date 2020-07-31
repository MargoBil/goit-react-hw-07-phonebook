import React from 'react';
import {connect} from 'react-redux';

import operations from '../../redux/actions/operations';
import themeSelector from '../../redux/celectors/themeSelectors';
import contactsSelectors from '../../redux/celectors/contactsSelectors';

import s from './ContactItem.module.css';

const ContactItem = ({contact, number, theme, onDeleteContact}) => {
  return (
    <li className={s[`item${theme}`]}>
      <p>
        {contact}: {number}
      </p>
      <button className={s[`btn${theme}`]} onClick={onDeleteContact}>
        Delete
      </button>
    </li>
  );
};

const mapStateToProps = (state, ownProps) => ({
  ...contactsSelectors.getContact(state, ownProps),
  theme: themeSelector.getTheme(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDeleteContact: () => dispatch(operations.deleteName(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
