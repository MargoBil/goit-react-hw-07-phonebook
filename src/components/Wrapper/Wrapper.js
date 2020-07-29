import React from 'react';
import {connect} from 'react-redux';

const Wrapper = ({theme, children}) => {
  const {themeColor} = theme;
  const isThemeLigth = themeColor === 'Light';
  isThemeLigth
    ? (document.body.style.backgroundColor = '#ffffff')
    : (document.body.style.backgroundColor = '#0a4658');
  return <div>{children}</div>;
};
const mapStateToProps = ({theme}) => ({
  theme
});
export default connect(mapStateToProps)(Wrapper);
