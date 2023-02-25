import React from "react";
import { Link, useNavigate } from "react-router-dom";
import userBlack from "../../assets/imgs/userBlack.png";
import house from "../../assets/imgs/house.png";

const Nav = () => {
  const handleLogout = () => {
    window.localStorage.clear();
    window.location.reload();
  };
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/')
  };
  return (
    <nav className="flex w-full fixed-top backdrop-blur-sm justify-between bg-transparent h-[8.5vh] text-white shrink-0 place-items-center">
      <img
        src={house}
        alt=""
        className="w-[2.8%] ml-2 cursor-pointer"
        onClick={navigateToHome}
      />

      <div className="flex ml-auto mr-auto justify-between w-[30%]">
        <Link to="/q-a">
          <button
            type="button"
            className="font-light text-white bg-black opacity-75 rounded-[5px] w-[130px] py-1"
          >
            Q-A
          </button>
        </Link>
        <Link to="/foro">
          <button
            type="button"
            className="font-light bg-black opacity-75 rounded-[8px] w-[130px] py-1"
          >
            Foro
          </button>
        </Link>
      </div>

      {/* <Link to="/resources">
          <button type="button">RESOURCES</button>
        </Link>
        <Link to="/login">
          <button type="button">LOGIN</button>
        </Link>
        <Link to="/register">
          <button type="button">REGISTER</button>
        </Link> 
          <button onClick={handleLogout} type="button"></button>*/}

      <img
        src={userBlack}
        alt=""
        className="w-[2.8%] mr-2 cursor-pointer"
        onClick={() => navigate("/register")}
      />
    </nav>
  );
};

export default Nav;
