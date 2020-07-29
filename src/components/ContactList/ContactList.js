import React from 'react';
import {connect} from 'react-redux';

import ContactItem from '../ContactItem/ContactItem';

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

const mapStateToProps = state => {
  const {items, filter} = state.contacts;
  const normalizeFilter = filter.toLowerCase();
  const visibleContacts = items.filter(({name}) =>
    name.toLowerCase().includes(normalizeFilter),
  );

  return {
    contacts: visibleContacts,
  };
};

export default connect(mapStateToProps)(ContactList);
