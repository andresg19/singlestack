import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../../Redux/Actions/Actions";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from 'sweetalert2'
import userwhite from "../../../assets/imgs/programmer.png"


export function validate(input) {
  let errors = {};

  if (!input.fullname) {
    errors.fullname = "Su nombre es requerido";
  } 
  else if (!/^[A-Z][a-zA-Z]{3,}(?: [A-Z][a-zA-Z]*){0,2}$/.test(input.fullname)) {
    errors.fullname = "El nombre ingresado es invalido"
  }
  if (!input.email) {
    errors.email = "Su email es requerido";
  } 
  else if (!/\S+@\S+\.\S+/.test(input.email)) {
    errors.email = "Email inválido"
  }
  if (!input.password) {
    errors.password = "La contraseña es requerida";
  } 
  else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(input.password)) {
    errors.password = "Mínimo 8 caracteres, al menos una letra y un número"
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
    img: [userwhite]
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
      
    } else {
      Swal.fire({
        icon: 'error',
        text: 'Revise los campos',
    })
    }
  };
  return (
    <div className="block mt-[5%] bg-black shadow-md shadow-[#0f0f0fbd] rounded-xl  max-w-[40%] h-[75vh] ml-auto mr-auto text-slate-200 font-sans font-light ">
      <div className="flex w-[25%] p-1 ml-auto mr-auto">
        <h1 className="mx-autotext-slate-300 italic font-medium">Ingrese sus datos</h1>
      </div>
      <form className="flex flex-col p-10 max-w-[50%] ml-auto mr-auto" onSubmit={handleSubmit}>
        <input
          id="small-input" 
          className="text-center block w-full p-2 bg-[#191919] rounded-md "
          type="text"
          autoComplete="off"
          value={input.fullname}
          name="fullname"
          placeholder="Nombre Apellido"
          onChange={handleChange}
        />
        <p className="text-red-600">{errors.fullname}</p>
        <br />
        <input
          id="small-input" 
          className="text-center block w-full p-2  bg-[#191919] rounded-md "
          type="text"
          autoComplete="off"
          value={input.email}
          name="email"
          placeholder="single@gmail.com"
          onChange={handleChange}
        />
        <p className="text-red-600">{errors.email}</p>
        <br />
        <input
          id="small-input" 
          className="text-center block w-full p-2  bg-[#191919] rounded-md "
          type="password"
          autoComplete="off"
          value={input.password}
          name="password"
          placeholder="contraseña"
          onChange={handleChange}
        />
        <p className="text-red-600">{errors.password}</p>
        <br />
        <input
              id="dropzone"
              type="dropzone"
              class="hidden"
              multiple
              onChange
            />

        <button 
        className="text-sm bg-[#191919] font-medium text-slate-300 hover:bg-[#060606] hover:text-slate-200 shadow-sm shadow-[#1d1d1de6] w-[50%] mr-auto ml-auto" 
        type="submit">
          Confirmar
          </button>
          <p className="underline mt-8 mx-auto font-normal text-[#0a0ac5]">
            Ya tienes una cuenta?
          </p>
      <button 
        className="text-xs mt-3 bg-[#191919] font-medium text-[#dddde2df] hover:bg-[#060606] hover:text-slate-200 shadow-sm shadow-[#1d1d1de6] w-[35%] mr-auto ml-auto"
        onClick={handleNavigate} 
        type="submit">
          Iniciar sesión
      </button>
        <h1 className="mx-auto mt-12 text-slate-500 italic font-medium">singlestack</h1>
      </form>

    </div>
  );
};

export default Register;
