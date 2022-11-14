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
  const navigateToQA = () => {
    window.location.reload();
  };
  return (
    <nav className="flex w-full justify-between bg-[#2B4046] h-[8.5vh] text-white shrink-0 place-items-center">
      <img
        src={house}
        alt=""
        className="w-[2.8%] ml-2"
        onClick={navigateToQA}
      />

      <div className="flex ml-auto mr-auto justify-between w-[30%]">
        <Link to="/ask-question">
          <button
            type="button"
            className="font-light bg-[#050D1A] rounded-[8px] w-[130px] py-1 hover:shadow-lg hover:shadow-[#e39999]"
          >
            Haz tu pregunta
          </button>
        </Link>
        <Link to="/q-a">
          <button
            type="button"
            className="font-light bg-[#050D1A] rounded-[8px] w-[130px] py-1 hover:shadow-lg hover:shadow-[#e39999]"
          >
            Recursos
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
        className="w-[2.8%] mr-2"
        onClick={() => navigate("/register")}
      />
    </nav>
  );
};

export default Nav;
