import React from 'react';
import { Link } from 'react-router-dom'
const Nav = () => {
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
            </li>
        </nav>
     );
}
 
export default Nav;