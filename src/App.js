import React from 'react';
import './App.css';
import { Route, useHistory } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
// Components
import Login from './components/auth/Login';
// Pages
import PublicPage from './components/pages/PublicPage';
import PrivatePage from './components/pages/PrivatePage';

const config = {
  issuer: `${process.env.REACT_APP_OKTA_DOMAIN}/oauth2/default`,
  clientId: process.env.REACT_APP_OKTA_CLIENT_ID,
  redirectUri: window.location.origin + '/implicit/callback',
};

const App = () => {
  const { push } = useHistory();
  return (
    <Security {...config} onAuthRequired={() => push('/login')}>
      <Route exact path="/" component={PublicPage} />
      <SecureRoute exact path="/private" component={PrivatePage} />
      <Route exact path="/login">
        <Login baseUrl={process.env.REACT_APP_OKTA_DOMAIN} />
      </Route>
      <Route path="/implicit/callback" component={LoginCallback} />
    </Security>
  );
};

export default App;