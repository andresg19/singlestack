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
    console.log(tag)
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
      <div className="flex font-sans text-lg font-light">
        <div className="bg-black opacity-50  shadow-md shadow-black mt-[7%] rounded-[2%] ml-[10%] w-[60vh]">
          {/* PRIMER DIV */}
          <input
            type="text"
            placeholder="busca tu duda"
            className="flex rounded-lg mt-5 mr-auto ml-auto w-[80%] bg-[#070a13]  placeholder:text-center  outline-none text-center"
            onChange={(e) => {setSearch(e.target.value)}}
          />
          <div className=" mt-[10%] ml-[10%] ">
            <h3 className="ml-2 underline font-medium text-[#46899B]">
              #Etiquetas
            </h3>
            {
                etiquetas.map(etiqueta => (
              <div className="inline-flex w-[40%] ml-5 text-center text-black font-medium justify-around">
              <p
                value={etiqueta}
                className="bg-[#B0B0B0] mt-6 rounded-[3px] text-lg cursor-pointer hover:bg-[#0f162b]  hover:text-white"
                onClick={handleTagFilter}
                >
                {etiqueta}
              </p>
            </div>
                )) 
            }    
           
          </div>
        </div>
        <div className="bg-black opacity-50 shadow-md shadow-black mt-[7%] rounded-[2%]  ml-[10%] w-[100vh] ">
          {/* SEGUNDO DIV */}

          <Questions handleSearch={filterPosts} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Qa;
