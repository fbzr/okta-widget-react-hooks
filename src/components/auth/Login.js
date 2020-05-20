import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import SignInWidget from './SignInWidget';
import { Redirect } from 'react-router-dom';

const Login = ({ baseUrl }) => {
    const { authService, authState } = useOktaAuth();

    const onSuccess = async res => {
        authService.redirect({
            sessionToken: res.session.token
        });
    };

    return (authState?.isAuthenticated ? 
        <Redirect to={{ pathname: '/private' }} />
        :
        <SignInWidget baseUrl={baseUrl} onSuccess={onSuccess} />
    );
};

export default Login;