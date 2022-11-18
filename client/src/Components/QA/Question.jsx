import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  searchPost,
  clearState,
  ayudaComment,
  dislikeComment,
  GetLikes,
} from "../../Redux/Actions/Actions";
import InputComment from "./InputComment";
import Nav from "../NavBar/Nav";
import Footer from "../Footer/Footer";
import bookmark from "../../assets/imgs/bookmark.png";
import share from "../../assets/imgs/share.png";
import userWhite from "../../assets/imgs/userWhite.png";
import finger from "../../assets/imgs/finger.png";
import { likeComment } from "./../../Redux/Actions/Actions";

export function dateFormatter(state) {
  //date "2022-10-26T13:25:39.855Z"
  //dateFromRedux.toString();

  if (state && typeof state === "string") {
    let cutter = state.split("T");
    let dateSplit = cutter[0].split("-");
    let dateJoin = `${dateSplit[2]} ${dateSplit[1]} ${dateSplit[0]}`;
    let hourSplit = cutter[1].split(".")[0];

    return `${hourSplit.substring(0, 5)} - ${dateJoin}`;
  }
  //let cutter = dateFromRedux.split(":");
  return "Error en la fecha/hora del post";
}

const Question = () => {
  const dispatch = useDispatch();
  const currentPost = useSelector((state) => state.postDetail);
  const currentComments = useSelector((state) => state.commentsDetail);
  const likes = useSelector((state) => state.likes);
  const { id } = useParams();
  const postId = currentPost.id;
  const userId = JSON.parse(localStorage.getItem("currentUser")).id;

  /* const [likeListener, setLikeListener] = useSelector("");
  const [dislikeListener, setDislikeListener] = useSelector(""); */

  useEffect(() => {
    dispatch(searchPost(id));
    dispatch(GetLikes());
    return () => {
      dispatch(clearState());
    };
  }, []);

  const handleLike = (e, c) => {
    e.preventDefault();

    let likeSelected = likes.filter((l) => l.commentId === c.id);
    console.log(
      "🚀 ~ file: Question.jsx ~ line 61 ~ handleLike ~ likeSelected",
      likeSelected
    );
    //Likes, switcher, userId, commentId

    if (likeSelected.clicked === true) {
      dispatch(dislikeComment("Likes", "down", userId, c.id));
    } else if (likeSelected.clicked === false) {
      dispatch(likeComment("Likes", "up", userId, c.id));
    } else {
      dispatch(likeComment("Likes", userId, c.id));
    }
  };
  const handleDislike = (e) => {
    e.preventDefault();
  };

  return (
    <div className="">
      <Nav />
      <div className=" inline-block ml-[25%] mt-6 bg-[#D9D9D9] rounded-[8px] shadow-[#5a5959] shadow-lg">
        <div className="flex justify-between mt-3 ml-2 mr-2 font-medium">
          <div className="">
            <h1 className="text-xl">{currentPost.title}</h1>
          </div>
          <div className="flex">
            <p className="text-xl cursor-pointer hover:text-[#46899B]">
              {currentPost.author}
            </p>
            <img src={userWhite} alt="" className="w-8 ml-2" />
          </div>
        </div>
        <div className=" mt-2 m-7 w-[100vh] bg-[#46899B] rounded-[8px] shadow-[#5a5959] shadow-lg border border-[#46899B] hover:border hover:border-black hover:bg-[#3d7888] ">
          <div className="flex justify-between ">
            <div className="flex space-x-3 ml-2 ">
              {currentPost.etiquetas?.map((t) => {
                return (
                  <p className="bg-[#3232323d] px-1 rounded-xl font-semibold text-center self-center hover:bg-[#D9D9D9]">
                    #{t}{" "}
                  </p>
                );
              })}
            </div>

            <img
              src={bookmark}
              alt=""
              className="mt-2 w-8 mr-1 cursor-pointer"
            />
          </div>
          <div className="mt-1 mb-2 mx-10   ">
            <p className="text-white text-xl m-8 mt-12 hover:text-black">
              {currentPost.content}
            </p>

            <div className=" justify-center space-x-8 m-8 mt-12">
              {currentPost.img?.map((i) => {
                return (
                  <img
                    src={i}
                    alt="img not found"
                    className="max-w-lg mb-4 mx-auto cursor-pointer rounded-[8px] shadow-[#5a5959] shadow-lg"
                    href={i}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex justify-between mr-2">
            <img src={share} alt="" className="w-8 ml-2 mb-2 cursor-pointer" />
            <p className="font-medium hover:text-white">
              {dateFormatter(currentPost.createdAt)}
            </p>
          </div>
        </div>
        <hr className="m-7 box-border border-slate-400" />
        <div className="flex justify-center ">
          <div className="w-[100vh]">
            {currentComments &&
              currentComments.map((c) => {
                return (
                  <div className="">
                    <div
                      key={c.id}
                      className="bg-[#AAABAC] rounded-[8px] shadow-[#5a5959] shadow-lg border border-[#AAABAC] hover:bg-[#c3c0c0] hover:border-black hover:border"
                    >
                      <div className="flex justify-between">
                        <p></p>
                        <div className="flex mt-2 ">
                          <p className="text-xl cursor-pointer">{c.author}</p>
                          <img
                            src={userWhite}
                            alt=""
                            className="w-8 ml-2 mr-2"
                          />
                        </div>
                      </div>
                      <div className="-mt-10">
                        <p className="text-green-800 ml-[25px]">
                          {c.clicked ? <p>like</p> : <p>dislike</p>}
                        </p>
                        <img
                          src={finger}
                          alt=""
                          className="w-8 ml-2 mb-2 cursor-pointer"
                          id={c.id}
                          onClick={(e) => handleLike(e, c)}
                        />
                        <img
                          src={finger}
                          alt=""
                          className="w-8 ml-[0.45rem] rotate-180 cursor-pointer"
                          onClick={handleDislike}
                          id={c.id}
                        />
                        <p className="text-red-800 ml-3">2</p>
                      </div>
                      <div className="px-[30px] -mt-20 min-h-[80px]">
                        <p className="text-white text-2xl ml-[8%] mr-[8%]">
                          {c.content}
                        </p>
                        <div className="">
                          {c &&
                            c.img.map((i) => {
                              return (
                                <div className="my-3">
                                  <img
                                    src={i}
                                    alt="img not found"
                                    className="max-w-lg cursor-pointer mx-auto rounded-[8px] shadow-[#5a5959] shadow-lg"
                                  />
                                </div>
                              );
                            })}
                        </div>
                      </div>
                      <div className="flex justify-between mx-2 pb-2">
                        <img
                          src={share}
                          alt=""
                          className="w-8 rotate-180 cursor-pointer"
                        />
                        <p className="text-lg">{dateFormatter(c.createdAt)}</p>
                      </div>
                    </div>

                    <hr className="m-7 box-border border-slate-400" />
                  </div>
                );
              })}

            <InputComment postId={postId} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Question;
