import React from 'react';
import * as ROUTES from 'router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from 'store/appStore/action';
import { SwitchThemeButton } from 'components';
import { StyledHeader, StyledLink, StlyedContainer } from './StyledHeader';
const Header = ({ islightTheme }) => {
  return (
    <StyledHeader>
      <StlyedContainer>
        <div>
          <StyledLink to={ROUTES.HOME}>Home</StyledLink>
          <StyledLink to={ROUTES.COLLECT}>Collect</StyledLink>
        </div>
        <div>
          <p>{islightTheme ? 'Light theme' : 'Dark theme'}</p>
          <SwitchThemeButton />
        </div>
      </StlyedContainer>
    </StyledHeader>
  );
};

export default connect(
  state => state.app,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Header);
