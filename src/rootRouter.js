import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as ROUTES from 'router';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from 'store/appStore/action';
import { lightTheme, darkTheme } from 'utility';
import { GlobalStyle, Header } from 'components';
import { App, Collect, Player } from 'pages';

const rootRouter = ({ islightTheme }) => (
  <ThemeProvider theme={islightTheme ? lightTheme : darkTheme}>
    <>
      <GlobalStyle />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Switch>
          <Route path={ROUTES.COLLECT} component={Collect} />
          <Route path={`${ROUTES.PLAYER}/:id`} component={Player} />
          <Route path={ROUTES.HOME} component={App} />
        </Switch>
      </BrowserRouter>
    </>
  </ThemeProvider>
);
export default connect(
  state => state.app,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(rootRouter);
