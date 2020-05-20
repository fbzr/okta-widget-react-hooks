import React from 'react';
import { useOktaAuth } from '@okta/okta-react';

const PublicPage = () => {
    const { authService } = useOktaAuth();

    const login = async () => {
        await authService.login('/private');
    }
    
    return (
        <div>
            <h1>Public Page</h1>
            <button onClick={login}>Login</button>
        </div>
    )
}

export default PublicPage;
