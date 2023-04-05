import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import menu from "../../assets/imgs/menu.png"
import close from "../../assets/imgs/close.png"
import Swal from 'sweetalert2'
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = () => {
  const handleLogout = () => {
    window.localStorage.clear();
    window.location.reload();
  };
  const actualUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);

  const handleLogOut = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: 'question',
      text: '¿Desea cerrar sesión?',

  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.clear();
      navigate('/')
    } 
  })
  }

  const handleControlForo = (e) => {
    e.preventDefault();
    if (!actualUser) {
      Swal.fire({
        icon:'warning',
        text: 'Inicie sesión para ver nuestro foro'
      })
    } else {
      navigate('/foro')
    }
  }

  const navigateToHome = () => {
    navigate('/')
  };




const scrollToTop = () => {
    scroll.scrollToTop(); 
};
 
  return (
   <div className='flex'> 
   {showSidebar ? (
      <img
      
      src={close}
      alt='img not found'
        className="flex text-4xl text-white items-center w-[10%] cursor-pointer fixed right-1 top-6 z-50 lg:w-[3%]"
        onClick={() => setShowSidebar(!showSidebar)}
      />
        
    
    ) : (
      <img
  
      src={menu}
      alt='img not found'
        className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-5 z-50 animate-pulse"
        onClick={() => setShowSidebar(!showSidebar)}
      />
    )}
    <div  className={`flex top-0 right-0 w-[50vw] shadow-md shadow-black bg-black bg-opacity-95 ease-in-out duration-300 text-white fixed h-full z-40 lg:w-[25vw] ${
    showSidebar ? "translate-x-0 " : "translate-x-full"
  }`}>
  {actualUser ?
      (
        
        <ul className='grid text-lg font-light underline w-[51%] mx-auto mt-[80%] max-h-[60vh] lg:mt-[60%]'>
        <li className="border-b border-gray-400 ">
          <a href="/q-a">Q-A</a>
        </li>
        <li className="border-b border-gray-400" onClick={handleControlForo}>
          <a href="/foro">Foro</a>
        </li>
        <li className="border-b border-gray-400 ">
          <a href="/profile">Mi perfil</a>
        </li>
        <li className="border-b border-gray-400 " onClick={handleLogOut}>
          <a href="/" >Cerrar sesión</a>
        </li>
        <li className="border-b border-gray-400 ">
          <a href="/" >Home</a>
        </li>
        </ul>
      
      ) :
      (
        <ul className='grid text-lg font-light underline w-[51%] mx-auto mt-[80%] max-h-[60vh] lg:mt-[60%]'>
          <li className="border-b border-gray-400 ">
            <a href="/q-a">Q-A</a>
          </li>
          <li className="border-b border-gray- cursor-pointer "  onClick={handleControlForo}>
            <a>Foro</a>
          </li>
          <li className="border-b border-gray-400 ">
            <a href="/register">Iniciar sesión o registro</a>
          </li>
          <li className="border-b border-gray-400 ">
          <a href="/" >Home</a>
        </li>
        </ul>
       
        )
    }

</div> 
</div>
  );}

  export default Nav;