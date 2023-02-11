import React, { useEffect } from "react";
import Nav from "../NavBar/Nav";
import FeedQA from "./FeedQA";
import Footer from "./../Footer/Footer";
import Questions from "./Questions";
import { useDispatch, useSelector } from "react-redux";
import { clearState, getPosts,  getRecientesPosts, searchByTag } from "../../Redux/Actions/Actions";
import { useState } from "react";
import { etiquetas } from "./etiquetas";

const Qa = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts)
  console.log(posts)

  const [search, setSearch] = useState("");

  const handleTagFilter = (e) => {
    e.preventDefault();
    let tag = e.target.attributes.getNamedItem("value").value; // o.O
    dispatch(searchByTag(tag));
  };

  
    let filterPosts = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.content.toLowerCase().includes(search.toLowerCase())
    );

  const handleFilter = (e) => {
    e.preventDefault();
    dispatch(getRecientesPosts())
  }


  return (
    <div className="">
      <Nav />
      <div className="flex">
        <div className="mt-[7%] shadow-[#191919] shadow-lg  rounded-[2%]  bg-[#1d2b50] ml-[10%] w-[60vh]">
          {/* PRIMER DIV */}
          <input
            type="text"
            placeholder="busca tu duda"
            className="flex rounded-lg mt-5 mr-auto ml-auto w-[80%] bg-[#0f162b] placeholder:text-[#fffff] placeholder:text-center placeholder:font-bold outline-none text-center text-lg"
            onChange={(e) => {setSearch(e.target.value)}}
          />
          <div className=" mt-[10%] ml-[10%] text-xl">
            <h3 className="ml-2 underline text-[#46899B] font-bold">
              #Etiquetas
            </h3>
            {
                etiquetas.map(etiqueta => (
              <div className="ml-8 w-[30%] text-center font-bold text-[#3B3A3A]">
              <p
                value="javascript"
                className="bg-[#B0B0B0] mt-6 rounded-[3px] cursor-pointer hover:bg-[#46899B] hover:text-white"
                onClick={handleTagFilter}
                >
                {etiqueta}
              </p>
            </div>
                )) 
            }    
            <hr className="mt-[10%] mr-[7%] border border-[#939393]" />
          </div>
          <div className="mt-[10%] ml-[10%] mb-[10%] text-xl">
            <h3 className="ml-2 underline text-[#46899B] font-bold">
              #Preguntas
            </h3>
            <div className=" ml-8 mb-4 w-[30%] text-center font-bold text-[#3B3A3A]">
              <button value='recientes' onClick={handleFilter} className="bg-[#B0B0B0] mt-6 rounded-[3px] cursor-pointer hover:bg-[#46899B] hover:text-white">
                Recientes
              </button>
            </div>
          </div>
        </div>
        <div className="mt-[7%] rounded-[2%] bg-[#1d2b50] ml-[10%] w-[100vh] shadow-[#191919] shadow-lg ">
          {/* SEGUNDO DIV */}

          <Questions handleSearch={filterPosts} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Qa;
