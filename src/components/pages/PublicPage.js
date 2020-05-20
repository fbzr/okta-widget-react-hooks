import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { useHistory } from 'react-router-dom';

const PublicPage = () => {
    const { push } = useHistory();
    const { authService, authState } = useOktaAuth();

    const login = async () => {
        await authService.login('/private');
    }

    return (
        <div>
            <h1>Public Page</h1>
            { authState.isAuthenticated ?
                <button onClick={() => push('/private')}>Access Private</button>
                :
                <button onClick={login}>Login</button>
            }
        </div>
    )
}

export default PublicPage;
