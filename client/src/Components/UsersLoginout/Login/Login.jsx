import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getUsers, login, userLogged } from "../../../Redux/Actions/Actions";

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
      }
    });
  };

  return (
    <div className="mt-[5%] opacity-80 shadow-md shadow-[#0f0f0fbd] rounded-xl bg-black max-w-[40%] h-[60vh] ml-auto mr-auto">
      <div className="flex w-[20%] p-2 text-gray-500 ml-auto mr-auto">
        <h1>Inicie sesión</h1>
      </div>
      <form className="flex flex-col p-10 max-w-[50%] ml-auto mr-auto" onSubmit={handleSubmit}>
        <input
          id="small-input" 
          className="mt-5 text-center block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          autoComplete="off"
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          id="small-input" 
          className="mt-5 text-center block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="password"
          autoComplete="off"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button
        className="mt-10 text-sm bg-[#aaabac5b] shadow-lg shadow-[#19191980] w-[50%] mr-auto ml-auto" 
        type="submit">
          Confirm
          </button>
      </form>
      <div className="w-[30%] text-gray-900 p-10 ml-auto mr-auto">
        <h1>singlestack</h1>
      </div>
    </div>
  );
};

export default Login;
