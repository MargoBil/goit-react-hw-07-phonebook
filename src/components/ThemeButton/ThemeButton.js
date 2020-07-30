import React from 'react';
import {connect} from 'react-redux';

import operations from '../../redux/actions/operations';
import themeSelectors from '../../redux/celectors/themeSelectors';

import s from './ThemeButton.module.css';

const ThemeButton = ({theme, toggleTheme}) => {
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
const mapStateToProps = state => ({
  theme: themeSelectors.getTheme(state),
});
const mapDispatchToProps = {
  toggleTheme: operations.toggleTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeButton);
