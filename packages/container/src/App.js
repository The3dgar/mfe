import React, { lazy, Suspense, useState, useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  Router,
} from 'react-router-dom';
import { createGenerateClassName, StylesProvider } from '@material-ui/styles';
import Header from './components/Header';
import { Progress } from './components/Progress';
import { createBrowserHistory } from 'history';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const history = createBrowserHistory();

export default () => {
  const [isSignIn, setIsSignIn] = useState(false);

  useEffect(() => {
    if (isSignIn) {
      history.push('/dashboard');
    }
  }, [isSignIn]);

  return (
    <Router history={history}>
      <>
        <StylesProvider generateClassName={generateClassName}>
          <Header isSignedIn={isSignIn} onSignOut={() => setIsSignIn(false)} />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route
                path="/auth"
                component={() => (
                  <AuthLazy onSignIn={() => setIsSignIn(true)} />
                )}
              />
              <Route path="/dashboard">
                {!isSignIn && <Redirect to="/" />}
                <DashboardLazy />
              </Route>

              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </StylesProvider>
      </>
    </Router>
  );
};
