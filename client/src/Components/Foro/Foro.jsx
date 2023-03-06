import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  filterCommentsForo, filterDateForo, filterLikesForo, getFeedPosts } from "../../Redux/Actions/Actions";
import Nav from "../NavBar/Nav";
import PostsForo from "./PostForo";
import { feedAllComments } from "./../../Redux/Actions/Actions";
import  AllFeedPosts  from "./AllFeedPosts"
import { Link } from "react-router-dom";
import userwhite from "../../assets/imgs/programmer.png";


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
      <div className="flex w-[40%] h-[20vh] bg-[#0a0b0e] ml-auto mr-auto mt-10 rounded-xl shadow-md shadow-[#0f0f0fbd]">
        <img
          src={userwhite}
          alt="not found"
          width={50}
          className="flex w-[10%] h-[40%] rounded-[50%] mt-[7%] ml-10"
        />
     
          <input
            onClick={modalOpen}
            placeholder="Haz un posteo"
            className="grid w-[60%] placeholder:text-slate-400 py-2 pl-3 pr-3 h-7 mt-12 ml-10 rounded-xl"
          />

        
      </div>
{modal ? (
          <div className="ml-auto mr-auto w-[50%]  ">
            <PostsForo />
            <button onClick={modalClose} className="bg-[#191919]  text-slate-200" >No postear</button>
          </div>
) : null}
      <hr className="mt-10 max-w-[80%] mx-auto border-[#ffffffcb]" />
      <div className="bg-[#0a0b0e] ml-auto mr-auto shadow-md shadow-[#0f0f0fbd] max-w-[60%]">
        <div className="grid mx-auto justi mt-10">
          <hr className="flex max-w-[70%] mt-5 ml-12 border-[#ffffffcb]" />
          <p
            className="ml-[82%] text-gray-400 text-sm  cursor-pointer"
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
