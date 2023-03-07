import React, { useEffect } from "react";
import Nav from "../NavBar/Nav";
import FeedQA from "./FeedQA";
import Footer from "./../Footer/Footer";
import Questions from "./Questions";
import { useDispatch, useSelector } from "react-redux";
import { clearState, getPosts,  getRecientesPosts, searchByTag } from "../../Redux/Actions/Actions";
import { useState } from "react";
import { etiquetas } from "./etiquetas";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const Qa = () => {
  const dispatch = useDispatch();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
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

  const handleUserControll = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: 'warning',
      text: 'Debe iniciar sesión para preguntar'
    })
  }


  return (
    <div className="">
      <Nav />
        {
          currentUser ?
          <Link to="/ask-question">
          <button className=" bg-[#070a13] hover:bg-[#030509] w-[10%] rounded-sm shadow-md shadow-[#000000] font-semibold text-[#181cff70] text-lg ml-[1%] mt-8 ">
            Preguntar
            </button>
          </Link>
          :
      <Link to="/ask-question">
      <button className=" bg-[#070a13] hover:bg-[#030509] w-[10%] rounded-sm shadow-md shadow-[#000000] font-semibold text-[#181cff70] text-lg ml-[1%] mt-8 "
      onClick={handleUserControll}>
        Preguntar
        </button>
      </Link>
        }
      <div className="flex font-sans text-lg font-light">
        <div className="bg-black  shadow-md shadow-[#090808] mt-[7%] rounded-[2%] ml-[1%] w-[50%]">
          {/* PRIMER DIV */}
          <input
            type="text"
            placeholder="busca tu duda"
            className="flex rounded-lg mt-5 mr-auto ml-auto w-[80%] bg-[#070a13] text-slate-200 placeholder:text-center  outline-none text-center"
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
                className="bg-[#B0B0B0] mt-6 rounded-[3px] text-lg cursor-pointer hover:bg-[#0a0b0e]  hover:text-white"
                onClick={handleTagFilter}
                >
                {etiqueta}
              </p>
            </div>
                )) 
            }    
           
          </div>
        </div>
        <div className="bg-black  shadow-md shadow-[#090808]  mt-[7%] rounded-[2%] ml-[1%] w-[70%] ">
          {/* SEGUNDO DIV */}

          <Questions handleSearch={filterPosts} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Qa;
