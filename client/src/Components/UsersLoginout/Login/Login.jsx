import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getUsers, login, userLogged } from "../../../Redux/Actions/Actions";
import Swal from 'sweetalert2'

const Login = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const users = useSelector((state) => state.users);
  console.log(users);

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("aprieta");
    users.forEach((u) => {
      if (u.email === input.email && u.password === input.password) {
        dispatch(userLogged(u));
        navigate("/");
      } else  {
        Swal.fire({
          icon: 'error',
          text: 'No se encontraron usuarios con sus datos. Revise los campos',
  
      })
      }
    });
  };

  return (
    <div className="block mt-[5%] bg-black shadow-md shadow-[#0f0f0fbd] rounded-xl  max-w-[40%] h-[50vh] ml-auto mr-auto text-slate-200 font-sans font-light ">
      <div className="flex w-[25%] p-1 ml-auto mr-auto">
        <h1 className="mx-auto text-lg text-slate-300 italic font-medium">Iniciar sesión</h1>
      </div>
      <form className="flex flex-col mt-10 max-w-[50%] ml-auto mr-auto" onSubmit={handleSubmit}>
        <input
          id="small-input" 
          className="text-center block w-full p-2 bg-[#191919] rounded-md"
          type="text"
          autoComplete="off"
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          id="small-input" 
          className="text-center mt-10 block w-full p-2 bg-[#191919] rounded-md"
          type="password"
          autoComplete="off"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button
        className="text-sm mt-10 bg-[#191919] font-medium text-slate-300 hover:bg-[#060606] hover:text-slate-200 shadow-sm shadow-[#1d1d1de6] w-[50%] mr-auto ml-auto" 
        type="submit">
          Confirm
          </button>
        <h1 className="mx-auto mt-12 text-slate-500 italic font-medium">singlestack</h1>
      </form>


    </div>
  );
};

export default Login;
