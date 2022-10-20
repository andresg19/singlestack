import React from 'react';
import { Link } from 'react-router-dom'
const Nav = () => {

   const handleLogout = () => {
    window.localStorage.clear();
    window.location.reload();
   }

    return ( 
        <nav className='navbar'>
            <li className='navigation'>
               <Link to='/q-a' >
               <button type='button'>Q / A</button>
               </Link>
               <Link to='/resources'>
               <button type='button'>RESOURCES</button>
               </Link>
               <Link to='/login'>
               <button type='button'>LOGIN</button>
               </Link>
               <Link to='/register'>
               <button type='button'>REGISTER</button>
               </Link>
               <button onClick={handleLogout} type='button'>LOGOUT</button>
            </li>
        </nav>
     );
}
 
export default Nav;