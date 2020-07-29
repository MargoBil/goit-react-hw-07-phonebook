import React, {Component} from 'react';
import {connect} from 'react-redux';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Section from './Section/Section';
import Filter from './Filter/Filter';
import ThemeButton from './ThemeButton/ThemeButton';
import Wrapper from './Wrapper/Wrapper';
import operations from '../redux/actions/operations';

class App extends Component {
  componentDidMount() {
    this.props.onFetchNamesToProps();
    this.props.onFetchThemeToProps();
  }

  render() {
    const visibleFilter = this.props.contacts.items.length > 1;
    const visibleList = this.props.contacts.items.length > 0;
    return (
      <Wrapper>
        <ThemeButton />
        <Section title="Phonebook">
          <ContactForm />
          {visibleFilter && <Filter />}
        </Section>
        {visibleList && (
          <Section title="Contacts">
            <ContactList />
          </Section>
        )}
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
  };
};

const mapDispatchToProps = {
  onFetchNamesToProps: operations.fetchNames,
  onFetchThemeToProps: operations.fetchTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
