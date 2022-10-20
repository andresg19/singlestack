import React from 'react';


const Login= () => {
    
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