import React from 'react';
import {connect} from 'react-redux';

import operations from '../../redux/actions/operations';
import themeSelectors from '../../redux/celectors/themeSelectors';

import s from './ThemeButton.module.css';

const ThemeButton = ({theme, toggleTheme}) => {
  let currentTheme;
  theme === 'Light' ? currentTheme = 'Dark': currentTheme = 'Light';
  return (
    <button
      className={s[`btn${theme}`]}
      type="button"
      onClick={() => toggleTheme(currentTheme)}
    >
      Theme: {theme}
    </button>
  );
};
const mapStateToProps = state => {
  return {
    theme: themeSelectors.getTheme(state),
  };
};
const mapDispatchToProps = {
  toggleTheme: operations.toggleTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeButton);
