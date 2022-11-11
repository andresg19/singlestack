import React, { useEffect } from "react";
import Nav from "../NavBar/Nav";
import FeedQA from "./FeedQA";
import Footer from "./../Footer/Footer";
import Questions from "./Questions";
import { useDispatch } from "react-redux";
import { clearState, searchByTag } from "../../Redux/Actions/Actions";

const Qa = () => {
  const dispatch = useDispatch();

  const handleTagFilter = (e) => {
    e.preventDefault();
    let tag = e.target.attributes.getNamedItem("value").value; // o.O
    dispatch(searchByTag(tag));
  };

  /*   useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []); */
  return (
    <div className=" h-[100vh]">
      <Nav />
      <div className="flex mt-10">
        <div className=" border border-[#46899b82] shadow-[#5a5959] shadow-lg  rounded-[2%]  bg-[#D9D9D9] ml-[10%] w-[60vh] hover:border-[rgba(3,3,3,0.51)] hover:shadow-[#396e7d82] hover:shadow-xl">
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
            <div className="ml-8 w-[30%] text-center font-bold text-[#3B3A3A]">
              <p
                value="javascript"
                className="bg-[#B0B0B0] mt-6 rounded-[3px] cursor-pointer hover:bg-[#46899B] hover:text-white"
                onClick={handleTagFilter}
              >
                #javascript
              </p>
              <p
                value="node"
                className="bg-[#B0B0B0] mt-6 rounded-[3px] cursor-pointer hover:bg-[#46899B] hover:text-white"
                onClick={handleTagFilter}
              >
                #node
              </p>
              <p
                value="python"
                className="bg-[#B0B0B0] mt-6 rounded-[3px] cursor-pointer hover:bg-[#46899B] hover:text-white"
                onClick={handleTagFilter}
              >
                #python
              </p>
            </div>
            <hr className="mt-[10%] mr-[7%] border border-[#939393]" />
          </div>
          <div className="mt-[10%] ml-[10%] mb-[10%] text-xl">
            <h3 className="ml-2 underline text-[#46899B] font-bold">
              #Preguntas
            </h3>
            <div className=" ml-8 mb-4 w-[30%] text-center font-bold text-[#3B3A3A]">
              <p className="bg-[#B0B0B0] mt-6 rounded-[3px] cursor-pointer hover:bg-[#46899B] hover:text-white">
                Recientes
              </p>
              <p className="bg-[#B0B0B0] mt-6 rounded-[3px] cursor-pointer hover:bg-[#46899B] hover:text-white">
                #Semanal
              </p>
            </div>
          </div>
        </div>
        <div className=" border border-[#46899b82] shadow-[#5a5959] shadow-lg  rounded-[2%]  bg-[#D9D9D9] ml-[10%] w-[100vh]  hover:border-[rgba(3,3,3,0.51)] hover:shadow-[#396e7d82] hover:shadow-xl">
          {/* SEGUNDO DIV */}

          <Questions />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Qa;
