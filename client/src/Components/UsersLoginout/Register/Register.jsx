import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../../Redux/Actions/Actions';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function validate(input) {
    let errors = {};

    if (!input.fullname) {
        errors.fullname = 'Name is required';
    }
    if(!input.email) {
        errors.email = 'Email is required';
    } 
    if(!input.password) {
        errors.password = 'Password is required';
    }
    return errors;
}

const Register = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    
    const [ input, setInput ] = useState({
        fullname: "",
        email: "",
        password: "",
    })
    console.log(input)

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value});

        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value,
        }));
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const errorsValidations = validate(input);

        if(Object.keys(errorsValidations).length === 0) {
            dispatch(register(input));
            setInput({
                fullname: "",
                email: "",
                password: "",
            });
            navigate('/login')
        }
    }
    return ( 
        <div className='containerRegister'> 
        <form className='containerFormRegister' onSubmit={handleSubmit}>
            <input type="text" autoComplete='off' name='fullname' placeholder='Harvey Specter' onChange={handleChange}/>
            <input type="text" autoComplete='off' name='email' placeholder='pearson@gmail.com' onChange={handleChange}/>
            <input type="password" autoComplete='off' name='password' placeholder='password' onChange={handleChange}/>
            <button type='submit'>Confirm</button>
        </form>
        </div>
     );
}
 
export default Register;