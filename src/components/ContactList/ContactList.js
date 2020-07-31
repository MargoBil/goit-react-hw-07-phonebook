import React from 'react';
import {connect} from 'react-redux';

import ContactItem from '../ContactItem/ContactItem';
import contactsSelectors from '../../redux/celectors/contactsSelectors';

import s from './ContactList.module.css';

const ContactList = ({contacts}) => {
  return (
    <ul className={s.list}>
      {contacts.map(({id}) => {
        return <ContactItem id={id} key={id} />;
      })}
    </ul>
  );
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

export default connect(mapStateToProps)(ContactList);
