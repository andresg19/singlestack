import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userBlack from "../../assets/imgs/userBlack.png";
import homeIcon from "../../assets/imgs/home.png"
import Swal from 'sweetalert2'

const Nav = () => {
  const handleLogout = () => {
    window.localStorage.clear();
    window.location.reload();
  };
  const actualUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);

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
  return (
    <div className="flex items-center  shadow-md shadow-black justify-between text-slate-200 py-5">
    <a href="/">
      <img src={homeIcon} alt="logo" className="ml-5" />
    </a>
    <nav className="bg-[#000000e7]">
      <section className="MOBILE-MENU flex lg:hidden">
        <div
          className="HAMBURGER-ICON space-y-2"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        </div>

        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"} >
          <div
            className="absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          {actualUser ?
      (
        
        <ul className="flex flex-col items-center justify-between font-bold text-[#140ed2] min-h-[150px]">
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
        </ul>
      
      ) :
      (
        <ul className="flex flex-col items-center justify-between font-bold text-[#140ed2] min-h-[150px]">
          <li className="border-b border-gray-400 ">
            <a href="/q-a">Q-A</a>
          </li>
          <li className="border-b border-gray- cursor-pointer "  onClick={handleControlForo}>
            <a>Foro</a>
          </li>
          <li className="border-b border-gray-400 ">
            <a href="/register">Iniciar sesión o registro</a>
          </li>
        </ul>
       
        )
    }
        </div>
      </section>

      {actualUser ?
      (
      <ul className="DESKTOP-MENU hidden space-x-8 mr-5 lg:flex ">
        <li className="border-b border-gray-400 font-semibold text-[#140ed2]">
          <a href="/q-a">Q-A</a>
        </li>
        <li className="border-b border-gray-400 font-semibold text-[#140ed2] cursor-pointer"  onClick={handleControlForo}>
          <a>Foro</a>
        </li>
        <li className="border-b border-gray-400 font-semibold text-[#140ed2]">
          <a href="/profile">Mi perfil</a>
        </li>
        <li className="border-b border-gray-400 font-semibold text-[#140ed2]"
        onClick={handleLogOut}>
          <a href="/" >Cerrar sesión</a>
        </li>
      </ul>
      ) :
      (
        <ul className="DESKTOP-MENU hidden space-x-8 mr-5 lg:flex">
          <li className="border-b border-gray-400 font-semibold text-[#140ed2]">
            <a href="/q-a">Q-A</a>
          </li>
          <li className="border-b border-gray-400 font-semibold text-[#140ed2] cursor-pointer"  onClick={handleControlForo}>
            <a>Foro</a>
          </li>
          <li className="border-b border-gray-400 font-semibold text-[#140ed2]">
            <a href="/register">Iniciar sesión o registro</a>
          </li>
        </ul>
        )
    }
    </nav>
    <style>{`
    .hideMenuNav {
      display: none;
    }
    .showMenuNav {
      display: block;
      position: absolute;
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
      background: white;
      z-index: 10;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
  `}</style>
  </div>
  );
};

export default Nav;
