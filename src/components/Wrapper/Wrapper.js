import React from 'react';
import {connect} from 'react-redux';

import themeSelectors from '../../redux/celectors/themeSelectors';

const Wrapper = ({theme, children}) => {
  const isThemeLigth = theme === 'Light';
  isThemeLigth
    ? (document.body.style.backgroundColor = '#ffffff')
    : (document.body.style.backgroundColor = '#0a4658');
  return <div>{children}</div>;
};
const mapStateToProps = state => ({
  theme: themeSelectors.getTheme(state),
});
export default connect(mapStateToProps)(Wrapper);
