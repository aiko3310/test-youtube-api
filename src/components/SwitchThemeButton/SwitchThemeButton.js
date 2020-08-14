import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from 'store/appStore/action';
import { StyledInput, StyledLabel } from './StyledSwitchThemeButton';
const SwitchThemeButton = ({ switchTheme }) => {
  return (
    <>
      <StyledInput type='checkbox' onClick={switchTheme} id='switch' />
      <StyledLabel htmlFor='switch'>Toggle</StyledLabel>
    </>
  );
};
export default connect(
  state => state.app,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(SwitchThemeButton);
