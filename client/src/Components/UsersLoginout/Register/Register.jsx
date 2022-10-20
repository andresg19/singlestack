import React from 'react';


const Register = () => {

    return ( 
        <div className='containerRegister'> 
        <form>
            <input type="text" autoComplete='off' placeholder='fullname'/>
            <input type="text" autoComplete='off' placeholder='email'/>
            <input type="password" autoComplete='off' placeholder='password'/>
            <button type='submit'>Confirm</button>
        </form>
        </div>
     );
}
 
export default Register;