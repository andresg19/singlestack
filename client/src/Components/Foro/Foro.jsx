import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  filterCommentsForo, filterDateForo, filterLikesForo, getFeedPosts } from "../../Redux/Actions/Actions";
import Nav from "../NavBar/Nav";
import PostsForo from "./PostForo";
import { feedAllComments } from "./../../Redux/Actions/Actions";
import  AllFeedPosts  from "./AllFeedPosts"
import { Link } from "react-router-dom";



const Foro = () => {
  const dispatch = useDispatch();
  const actualUser = JSON.parse(localStorage.getItem("currentUser"));
  const posts = useSelector((state) => state.feedPosts);
  console.log(posts)
  const [modal, setModal] = useState(false);
  const [filterBool, setFilterBool] = useState(false);

  useEffect(() => {
    dispatch(getFeedPosts());
    dispatch(feedAllComments());
  }, []);

  const modalOpen = () => {
    setModal(true);
    console.log("open");
  };
  const modalClose = () => {
    setModal(false);
    console.log("close");
  };

  const handleFilterLikes = (e) => {
    e.preventDefault();
    dispatch(filterLikesForo());
  }

  const handleComments = (e) => {
    e.preventDefault();
    dispatch(filterCommentsForo());
  }

  const handleDate = (e) => {
    e.preventDefault();
    dispatch(filterDateForo());
  }

  const handleReload = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  return (
    <div>
      <Nav />
      <div className="flex w-[80%] h-[10vh] bg-[#0a0b0e] ml-auto mr-auto mt-[30%] rounded-xl shadow-md shadow-[#0f0f0fbd]">
     { actualUser?  <img
          src={actualUser.img}
          alt="not found"
          width={50}
          className="flex w-[10%] h-[40%] rounded-[50%] mt-[7%] ml-10"
        /> 
        :
        <img
          src='./imgs/userWhite.png'
          alt="not found"
          width={50}
          className="flex w-[10%]  rounded-[50%] ml-10"
        /> 
      }
     
          <input
            onClick={modalOpen}
            placeholder="Haz un posteo"
            className="grid w-[60%] placeholder:text-[#000000] font-medieum py-2 pl-3 pr-3 h-5 mt-7 ml-3 rounded-xl bg-[#ffffffaa]"
          />

        
      </div>
{modal ? (
          <div className="grid w-[100%] mt-10 ">
            <div className="grid w-[80%] mx-auto">
            <PostsForo />
            </div>
            <button onClick={modalClose} className="bg-[#070a13] hover:bg-[#030509] w-[30%] rounded-sm shadow-md shadow-[#000000] font-semibold text-[#6f6f6f] text-sm ml-[1%]" >Cerrar ventana</button>
          </div>
) : null}
      <hr className="mt-10 max-w-[80%] mx-auto border-[#ffffffcb]" />
      <div className="bg-[#0a0b0e] ml-auto mr-auto shadow-md shadow-[#0f0f0fbd] max-w-[80%]">
        <div className="grid mx-auto justi mt-10">
          <p
            className="ml-[90%] text-gray-400 text-sm mt-5 cursor-pointer"
            onClick={() => setFilterBool(!filterBool)}
          >
            Ordenar por ↓
          </p>
          {filterBool ? (
            <div className="flex justify-between font-normal mt-5  text-slate-500">
              <button
                value="reload"
                onClick={handleReload}
                className="cursor-pointer bg-black hover:bg-[#191919] rounded-md"
              >
                Recargar
              </button>
              <button
                value="date"
                onClick={handleDate}
                className="cursor-pointer bg-black hover:bg-[#191919] rounded-md"
              >
                Más Nuevos
              </button>
              <button
                value="likes"
                onClick={handleFilterLikes}
                className="cursor-pointer bg-black hover:bg-[#191919] rounded-md"
              >
                Más Likes
              </button>
              <button
                value="comments"
                onClick={handleComments}
                className="cursor-pointer bg-black hover:bg-[#191919] rounded-md" 
              >
                Más Comentarios
              </button>
            </div>
          ) : null}
        </div>
        
        <AllFeedPosts />
      </div>

    </div>
  );
};

export default Foro;
