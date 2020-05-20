import React, { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';

const PrivatePage = () => {
    const { authService } = useOktaAuth();
    const [user, setUser] = useState();

    useEffect(() => {
        (async () => {
            const res = await authService.getUser();
            setUser(res);
        })();
    }, [authService]);

    const logout = async () => {
        await authService.logout();
    }

    return (
        <>
            <h1>Private Page</h1>
            <pre>
                {JSON.stringify(user, null, 2)}
            </pre>

            <button onClick={logout}>logout</button>
        </>
    )
}

export default PrivatePage;
