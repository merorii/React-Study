// base
import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

// pages
import { myListPage, loginPage } from '../pages';

// path
export const ROUTE_LOGIN = '/login';
export const ROUTE_ENJOY = '/enjoy';

export const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path={ROUTE_LOGIN} exact component={loginPage} />
      <Route path={ROUTE_ENJOY} component={myListPage} />
      <Redirect path="*" to="/login" />
    </Switch>
  </BrowserRouter>
);
