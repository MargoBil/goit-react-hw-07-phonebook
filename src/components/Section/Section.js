import React from 'react';
import {connect} from 'react-redux';

import s from './Section.module.css';

const Section = ({title, theme, children}) => {
  return (
    <section className={s.section}>
      <h2 className={s[`name${theme}`]}>{title}</h2>
      {children}
    </section>
  );
};

const mapStateToProps = ({theme}) => ({
  theme: theme.themeColor,
});

export default connect(mapStateToProps)(Section);
