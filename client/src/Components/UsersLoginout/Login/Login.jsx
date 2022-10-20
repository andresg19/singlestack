import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login= () => {
    const { loginWithRedirect } = useAuth0();

    return(
        <div className='containerLogin'> 
        <form>
            <input type="text" autoComplete='off' placeholder='email'/>
            <input type="password" autoComplete='off' placeholder='password'/>
            <button type='submit'>Confirm</button>
        </form>
        </div>
   
    ) 
}
 
export default Login;