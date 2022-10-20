import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login= () => {
    const { loginWithRedirect } = useAuth0();

    return(
        <div> 
            <h1>LOGIN</h1>
        </div>
    ) 
}
 
export default Login;