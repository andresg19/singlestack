import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getUsers, login, userLogged } from "../../../Redux/Actions/Actions";
import Swal from 'sweetalert2';
import Nav from "../../NavBar/Nav";
import Footer from "../../Footer/Footer"

const Login = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const users = useSelector((state) => state.users);
  console.log(users);

  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  console.log(input)
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("aprieta");
    users.map((u) => {
      if (u.email === input.email && u.password === input.password) { 
        dispatch(userLogged(u));
        Swal.fire({
          icon: 'success',
          text: 'Inicio exitoso, "OK" para continuar',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/") 
        } 
        
      })
  } 
});
  };
      
      // if (u.email !== input.email && u.password !== input.password || !input.email || !input.password) {
      //   Swal.fire({
      //     icon: 'error',
      //     text: 'Revise los campos',
      // })
      // }

  return (
    <div>
      <Nav />
    <div className="mt-[35%] bg-black shadow-md shadow-[#0f0f0fbd] rounded-xl w-[100%] h-[50vh] ml-auto mr-auto text-slate-200 font-sans font-light sm:mt-[10%] sm:h-[70vh]">
      <div className="flex w-[100%] p-1 ml-auto mr-auto">
        <h1 className="mx-auto text-lg text-slate-300 italic font-medium">Iniciar sesión</h1>
      </div>
      <form className="flex flex-col mt-10 max-w-[80%] ml-auto mr-auto sm:w-[50%] lg:w-[25%] lg:text-xs" onSubmit={handleSubmit}>
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
    <Footer />
    </div>
  );
};

export default Login;
