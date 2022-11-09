import React from "react";
import Nav from "../NavBar/Nav";
import FeedQA from "./FeedQA";
import Footer from "./../Footer/Footer";
import Questions from "./Questions";

const Qa = () => {
  return (
    <div className=" h-[100vh]">
      <Nav />
      <div className="flex mt-10 ">
        <div className=" border border-[#46899b82] shadow-[#5a5959] shadow-lg  rounded-[2%]  bg-[#D9D9D9] ml-[10%] w-[60vh] h-[100%] hover:border-[rgba(3,3,3,0.51)] hover:shadow-[#396e7d82] hover:shadow-xl">
          {/* PRIMER DIV */}
          <input
            type="text"
            placeholder="busca tu duda"
            className="flex rounded-lg mt-5 mr-auto ml-auto w-[80%] placeholder:text-[#46899b82] placeholder:text-center placeholder:font-bold outline-none text-center text-lg"
          />
          <div className=" mt-[10%] ml-[10%] text-xl">
            <h3 className="ml-2 underline text-[#46899B] font-bold">
              #Etiquetas
            </h3>
            <div className="  ml-8 w-[30%] text-center font-bold text-[#3B3A3A] ">
              <p className="bg-[#B0B0B0] mt-6 rounded-[3px]">#javascript</p>
              <p className="bg-[#B0B0B0] mt-6 rounded-[3px]">#nodejs</p>
              <p className="bg-[#B0B0B0] mt-6 rounded-[3px]">#python</p>
            </div>
            <hr className="mt-[10%] mr-[7%] border border-[#939393]" />
          </div>
          <div className="mt-[10%] ml-[10%] mb-[10%] text-xl ">
            <h3 className="ml-2 underline text-[#46899B] font-bold">
              #Preguntas
            </h3>
            <div className=" ml-8 mb-4 w-[30%] text-center font-bold text-[#3B3A3A]">
              <p className="bg-[#B0B0B0] mt-6 rounded-[3px]">Recientes</p>
              <p className="bg-[#B0B0B0] mt-6 rounded-[3px]">#Semanal</p>
            </div>
          </div>
        </div>
        <div className=" border border-[#46899b82] shadow-[#5a5959] shadow-lg  rounded-[2%]  bg-[#D9D9D9] ml-[10%] w-[100vh] h-[100%] hover:border-[rgba(3,3,3,0.51)] hover:shadow-[#396e7d82] hover:shadow-xl">
          {/* SEGUNDO DIV */}
          <div className=" mt-[10%] ml-[10%] text-xl h-[100vh] object-contain">
            <Questions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qa;
