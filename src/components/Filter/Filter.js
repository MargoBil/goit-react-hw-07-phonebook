import React from 'react';
import {connect} from 'react-redux';

import {changeFilter} from '../../redux/actions/index';

import s from './Filter.module.css';

const Filter = ({value, theme, onChange}) => {
  return (
    <div className={s.box}>
      <label className={s[`label${theme}`]}>
        Find contacts by name
        <input value={value} onChange={({target}) => onChange(target.value)} />
      </label>
    </div>
  );
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
  theme: state.theme.themeColor,
});

const mapDispatchToProps = {
  onChange: changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
