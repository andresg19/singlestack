import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import { getUsers, userLogged } from "../../../Redux/Actions/Actions"


const Login= () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const users = useSelector((state) => state.users)
    console.log(users)

    const [ input, setInput ] = useState({
        fullname: "",
        email: "",
        password: "",
    })
    console.log(input)

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    const handleChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value});

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        users.forEach(u => {
            if(u.email === input.email && u.password === input.password) {
                dispatch(userLogged(u))
                navigate('/');
            }
        });

        }

    return(
        <div className='containerLogin'> 
        <form className='containerFormLogin' onSubmit={handleSubmit}>
            <input type="text" autoComplete='off' name='email' placeholder='email' onChange={handleChange}/>
            <input type="password" autoComplete='off' name='password' placeholder='password' onChange={handleChange}/>
            <button type='submit'>Confirm</button>
        </form>
        </div>
   
    ) 
}
 
export default Login;