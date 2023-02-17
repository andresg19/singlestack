import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  filterCommentsForo, filterDateForo, filterLikesForo, getFeedPosts } from "../../Redux/Actions/Actions";
import Nav from "../NavBar/Nav";
import PostsForo from "./PostForo";
import { feedAllComments } from "./../../Redux/Actions/Actions";
import { AllFeedPosts } from "./AllFeedPosts"
import { Link } from "react-router-dom";

const Foro = () => {
  const dispatch = useDispatch();
  const actualUser = JSON.parse(localStorage.getItem("currentUser"));
  const posts = useSelector((state) => state.feedPosts);
  console.log(posts)
  const comments = useSelector((state) => state.feedComments);
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
      <div className="flex w-[40%] h-[20vh] bg-[#0f1629ac] ml-auto mr-auto mt-10 rounded-xl shadow-md shadow-[#0f0f0fbd]">
        <img
          src="https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg"
          alt="not found"
          width={50}
          className="flex w-[10%] h-[40%] rounded-[50%] mt-[7%] ml-10"
        />
        {modal ? (
          <div>
            <PostsForo />
            <button onClick={modalClose}>Cerrar ventana</button>
          </div>
        ) : (
          <input
            onClick={modalOpen}
            placeholder="Haz un posteo"
            className="grid w-[60%] placeholder:text-slate-400 py-2 pl-3 pr-3 h-7 mt-12 ml-10 rounded-xl"
          />
        )}
      </div>
      <hr className="mt-10 max-w-[80%] mx-auto border-[#ffffffcb]" />
      <div className="bg-[#0f1629ac] ml-auto mr-auto shadow-md shadow-[#0f0f0fbd] max-w-[50%]">
        <div className="mx-auto mt-10">
          <hr className="max-w-[70%] mt-[] ml-12 border-[#ffffffcb]" />
          <p
            className="ml-[82%] text-gray-400 text-sm mb-1 cursor-pointer"
            onClick={() => setFilterBool(!filterBool)}
          >
            Ordenar por ↓
          </p>
          {filterBool ? (
            <div className="flex justify-between">
              <button
                value="reload"
                onClick={handleReload}
                className="cursor-pointer"
              >
                Recargar
              </button>
              <button
                value="date"
                onClick={handleDate}
                className="cursor-pointer"
              >
                Más Nuevos
              </button>
              <button
                value="likes"
                onClick={handleFilterLikes}
                className="cursor-pointer"
              >
                Más Likes
              </button>
              <button
                value="comments"
                onClick={handleComments}
                className="cursor-pointer"
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
