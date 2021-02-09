import React, { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

import UpperBar from 'components/UpperBar/UpperBar';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';

const PhoneBookView = lazy(() =>
  import(
    'views/PhoneBookView/PhoneBookView' /* webpackChunkName: "PhoneBookView" */
  ),
);
const HomeView = lazy(() =>
  import('views/HomeView/HomePge' /* webpackChunkName: "HomePge" */),
);
const SignupView = lazy(() =>
  import('views/SignupView/SignupView' /* webpackChunkName: "SignupView" */),
);
const LoginView = lazy(() =>
  import('views/LoginView/LoginView' /* webpackChunkName: "LoginView" */),
);
const LogoutView = lazy(() =>
  import('views/LogoutView/LogoutView' /* webpackChunkName: "LogoutView" */),
);

function App() {
  const dispatch = useDispatch();
  const isRefreshingUser = useSelector(authSelectors.getIsRefreshingUser);

  useEffect(() => {
    dispatch(authOperations.getUser());
  }, [dispatch]);

  return (
    !isRefreshingUser && (
      <>
        <UpperBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>

            <PrivateRoute path="/phone-book" redirectTo="/login">
              <PhoneBookView />
            </PrivateRoute>

            <PublicRoute path="/login" redirectTo="/phone-book" restricted>
              <LoginView />
            </PublicRoute>

            <PublicRoute path="/signup" redirectTo="/phone-book" restricted>
              <SignupView />
            </PublicRoute>

            <PrivateRoute path="/logout" redirectTo="/login">
              <LogoutView />
            </PrivateRoute>

            <PublicRoute>
              <div>not found</div>
            </PublicRoute>
          </Switch>
        </Suspense>
      </>
    )
  );
}

export default App;
