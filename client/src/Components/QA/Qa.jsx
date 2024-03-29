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
import Loading from "../loadPage";



const Qa = () => {
  const dispatch = useDispatch();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  const [search, setSearch] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getPosts);
  })

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

  const handleUserControll = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: 'warning',
      text: 'Debe iniciar sesión para preguntar'
    })
  }



  return(
    <div className="min-h-screen">
      <Nav />
        {
          currentUser ?
          <Link to="/ask-question">
          <button className="mt-[35%] rounded-sm font-semibold ml-5 btn-primary bg-[#19191955]  text-[#a2abae] shadow-sm shadow-[#2b5d6641] border-collapse sm:text-sm lg:mt-10 lg:text-xs">
            Haz una pregunta
            </button>
          </Link>
          :
      <Link to="/ask-question">
      <button className="mt-[35%] rounded-sm font-semibold ml-5 btn-primary bg-[#19191955]  text-[#a2abae] shadow-sm shadow-[#2b5d6641] border-collapse sm:text-sm lg:mt-10 lg:text-xs"
      onClick={handleUserControll}>
        Haz una pregunta
        </button>
      </Link>
        }
      
      <div className="font-sans text-lg font-light lg:grid lg:grid-cols-2">
        <div className="bg-black  shadow-md shadow-[#090808] mt-[7%] rounded-[2%] ml-[1%] w-[100%] sm:w-[60%] sm:mx-auto lg:w-[60%] lg:ml-5 lg:mt-[10%]">
          {/* PRIMER DIV */}
          <input
            type="text"
            placeholder="busca tu duda"
            className="flex rounded-lg mt-5 mr-auto ml-auto w-[80%] bg-[#070a13] text-slate-200 placeholder:text-center  outline-none text-center sm:w-[60%] sm:text-sm sm:placeholder:text-sm"
            onChange={(e) => {setSearch(e.target.value)}}
          />
          <div className="mt-[10%] mx-auto max-h-[30vh] overflow-y-auto lg:max-h-[45%]">
            <h3 className="ml-2 underline font-medium text-[#46899B]">
              #Etiquetas
            </h3>
            {
                etiquetas.map(etiqueta => (
              <div className="inline-flex w-[40%] ml-5 text-center text-black font-medium justify-around" key={etiqueta}>
              <p
                value={etiqueta}
                className="text-white bg-[#19191959] mt-6 rounded-[3px] text-lg cursor-pointer hover:bg-[#0a0b0e]"
                onClick={handleTagFilter}
                >
                {etiqueta}
              </p>
            </div>
                )) 
            }    
           
          </div>
        <button className="text-slate-400 text-sm mt-5 bg-[#19191911] hover:bg-[#191919] sm:ml-5 sm:text-sm sm:font-semibold lg:text-xs" onClick={() => window.location.reload()}>
          RECARGAR
        </button>
        </div>
    
        <div className="mx-auto w-[100%] mt-[20%] sm:mt-[2%] sm:w-[80%] lg:w-[95%] lg:mx-auto lg:mt-10">
          {/* SEGUNDO DIV */}
  
          <Questions handleSearch={filterPosts} />
        </div>
      </div> 
  

      <Footer />
     
   
    </div>
  )
};

export default Qa;
