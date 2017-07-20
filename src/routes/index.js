import React from 'react';
import { IndexRoute, Route } from 'react-router'
import App from '../components/App'
import HomeView from './HomeView'
import AboutView from './AboutView'
import NotFound from './NotFound'

export default (store) => {
  // const checkUser = (cond, replace, cb) => {
  //   const { app: { user: { loggedIn } } } = store.getState()
  //   if (!cond(loggedIn)) {
  //     replace('/');
  //   }
  //   cb();
  // };
  //
  // const requireNotLogged = (nextState, replace, cb) => {
  //   const cond = loggedIn => !loggedIn;
  //   checkUser(cond, replace, cb)
  // };
  // const requireLogin = (nextState, replace, cb) => {
  //   const cond = loggedIn => !!loggedIn;
  //   checkUser(cond, replace, cb)
  // };

  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      <IndexRoute component={HomeView} />

      <Route path="/about" component={AboutView} />

      {/* Catch all route */}
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
