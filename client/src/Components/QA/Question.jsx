import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  searchPost,
  clearState,
  ayudaComment,
  dislikeComment,
  GetLikes,
  dislikeDislikeComment,
  dislikeLikeComment,
  GetDislikes,
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
  const dislikes = useSelector((state) => state.dislikes);
  console.log(likes);
  const { id } = useParams(); //postId
  const postId = currentPost.id;
  const userId = JSON.parse(localStorage.getItem("currentUser")).id;
  console.log(userId)
  const switcher = ["up", "down"];
  const [dispatchLike, setDispatchLike] = useState({
    model: "Likes",
    switcher: ["up", "down"],
    userId: userId,
    commentId: "",
  });
  const [dispatchDislike, setDispatchDislike] = useState({
    model: "Dislikes",
    switcher: ["up", "down"],
    userId: userId,
    commentId: "",
  });
  useEffect(() => {
    dispatch(searchPost(id));
    dispatch(GetLikes());
    dispatch(GetDislikes());
    return () => {
      dispatch(clearState());
    };
  }, []);

  /* useEffect(() =>{

  },[dispatch]) */

  
  const handleLike = (e, c) => {
    e.preventDefault();

    
      if (likes.length === 0) {
        dispatch(
          dislikeComment(
            e.commentId,
            userId
          )
        )
      } else {
        likes.map(e => {
          if( e.userId !== userId ) {
            dispatch(
             dislikeComment(
               e.commentId,
               userId
             )
           )
          } 
  
        })

      }
     
    
    
    let likeSelected = likes.filter(
      (l) => l.commentId === c.id
      );
      console.log("likeSelected", likeSelected);

      
      if (
        likeSelected[0].clicked === true &&
        likeSelected[0].userId === userId 
      ) {
        console.log("entre al if");
        dispatch(
          dislikeComment(
            likeSelected[0].commentId,
            userId,
            dispatchLike.switcher[1],
          )
        );
      } else if ( likeSelected[0].clicked === false && likeSelected[0].userId === userId) {
        dispatch(
          likeComment(
            likeSelected[0].commentId,
            userId,
            dispatchLike.switcher[0],
          )
          );
          }
    }
  ;
  // }
  //else if (likeSelected.length && likeSelected[0].clicked === true && dispatchLike.userId === userId) {
  //   console.log('entre al else')
  //   dispatch(
  //     likeComment(
  //       dispatchLike.commentId,
  //       dispatchLike.userId,
  //       dispatchLike.switcher[1]
  //     )
  //   );
  // }

  const handleDislike = (e, c) => {
    e.preventDefault();
    dispatchDislike.commentId = c.id;

    let dislikesSelected = dislikes.filter(
      (l) => l.commentId === dispatchDislike.commentId
    );
    if (!dislikesSelected.length || dislikesSelected.clicked === "undefined") {
      dispatch(dislikeLikeComment(dispatchDislike));
    } else if (dislikesSelected && dislikesSelected[0].clicked === true) {
      dispatch(
        dislikeDislikeComment(dispatchDislike, dispatchDislike.switcher[1])
      );
    } else if (dislikesSelected && dislikesSelected[0].clicked === false) {
      dispatch(
        dislikeLikeComment(dispatchDislike, dispatchDislike.switcher[0])
      );
    }
  };

  return (
    <div className="">
      <Nav />
      <div className=" inline-block ml-[25%] mt-6 bg-[#8a9597] rounded-[8px] shadow-[#0f0f0fbd] shadow-lg">
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
        <div className=" mt-2 m-7 w-[100vh] bg-[#26505c] rounded-[8px] shadow-[#5a5959] shadow-lg border border-[#46899B] hover:border hover:border-black hover:bg-[#214b57] ">
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
                      className="bg-[#8a9597] rounded-[8px] shadow-[#5a5959] shadow-lg border border-[#aaabac3b] hover:bg-[#254f5709]"
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
                          onClick={(e) => handleDislike(e, c)}
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
