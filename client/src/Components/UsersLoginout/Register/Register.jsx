import React from "react";
import { useDispatch } from "react-redux";
import { register } from "../../../Redux/Actions/Actions";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from 'sweetalert2'


export function validate(input) {
  let errors = {};

  if (!input.fullname) {
    errors.fullname = "Name is required";
  }
  if (!input.email) {
    errors.email = "Email is required";
  }
  if (!input.password) {
    errors.password = "Password is required";
  }
  return errors;
}

const Register = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  console.log(input);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });

    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  
  const handleNavigate = () => {
    navigate('/login')
  }
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const errorsValidations = validate(input);

    if (Object.keys(errorsValidations).length === 0) {
      dispatch(register(input));
      setInput({
        fullname: "",
        email: "",
        password: "",
      });
      Swal.fire({
        icon: 'success',
        text: 'Registro exitoso',

    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload()
      } 
      
    })
      
    }
  };
  return (
    <div className="mt-[5%] opacity-80 shadow-md shadow-[#0f0f0fbd] rounded-xl bg-black max-w-[40%] h-[60vh] ml-auto mr-auto">
      <div className="flex w-[25%] p-1 text-gray-500 ml-auto mr-auto">
        <h1>Ingrese sus datos</h1>
      </div>
      <form className="flex flex-col p-10 max-w-[50%] ml-auto mr-auto" onSubmit={handleSubmit}>
        <input
          id="small-input" 
          className="text-center block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          autoComplete="off"
          name="fullname"
          placeholder="Harvey Specter"
          onChange={handleChange}
        />
        <br />
        <input
          id="small-input" 
          className="text-center block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          autoComplete="off"
          name="email"
          placeholder="pearson@gmail.com"
          onChange={handleChange}
        />
        <br />
        <input
          id="small-input" 
          className="text-center block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="password"
          autoComplete="off"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <br />
        <button 
        className="text-sm bg-[#aaabac5b] shadow-lg shadow-[#19191980] w-[50%] mr-auto ml-auto" 
        type="submit">
          Confirm
          </button>
      </form>

      <button 
        className="flex text-sm bg-[#aaabac5b] shadow-lg shadow-[#19191980] w-[14%] mr-auto ml-auto"
        onClick={handleNavigate} 
        type="submit">
          Iniciar sesión
      </button>
      <div className="w-[30%] text-gray-900 p-10 ml-auto mr-auto">
        <h1>singlestack</h1>
      </div>
    </div>
  );
};

export default Register;
