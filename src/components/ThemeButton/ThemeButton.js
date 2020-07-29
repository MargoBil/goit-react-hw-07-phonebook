import React from 'react';
import {connect} from 'react-redux';

import operations from '../../redux/actions/operations';

import s from './ThemeButton.module.css';

const ThemeButton = ({theme, toggleTheme}) => {
  console.log(theme)
  return (
    <button
      className={s[`btn${theme}`]}
      type="button"
      onClick={() => toggleTheme()}
    >
      Theme: {theme}
    </button>
  );
};
const mapStateToProps = ({theme}) => {
  return {
    theme: theme.themeColor,
  };
};
const mapDispatchToProps = {
  toggleTheme: operations.toggleTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeButton);
