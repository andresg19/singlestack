import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  searchPost,
  clearState,
  GetLikes,
  GetDislikes,
  dislikeComment,
} from "../../Redux/Actions/Actions";
import InputComment from "./InputComment";
import Nav from "../NavBar/Nav";
import Footer from "../Footer/Footer";
import bookmark from "../../assets/imgs/bookmark.png";
import share from "../../assets/imgs/share.png";
import userWhite from "../../assets/imgs/userWhite.png";
import finger from "../../assets/imgs/finger.png";
import { likeComment } from "./../../Redux/Actions/Actions";
import FingerLike from "./FingerLike";
import FingerDislike from "./FingerDislike";
import ModalImage from "react-modal-image";
import { Lightbox } from "react-modal-image";
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

  const { id } = useParams(); //postId
  const postId = currentPost.id;
  const userId = JSON.parse(localStorage.getItem("currentUser")).id;

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
    let commentId = currentComments.filter((comment) => comment.id === c.id);
    dispatch(likeComment(commentId[0].id, userId));
    window.location.reload();
  };
  const handleDislike = (e, c) => {
    e.preventDefault();
    let commentId = currentComments.filter((comment) => comment.id === c.id);
    console.log(commentId);
    dispatch(dislikeComment(commentId[0].id, userId));
    window.location.reload();
  };

  return (
    <div className="">
      <Nav />
      <div className="mt-[7%] inline-block ml-[25%] rounded-[8px] shadow-[#0f0f0fbd] shadow-lg">
        <div className="flex justify-between  mt-3 ml-2 mr-2 font-medium">
          <div className="ml-auto mr-auto">
            <h1 className="text-xl justify-center text-[#aaabac] ">
              {currentPost.title}
            </h1>
          </div>
          <div className="flex">
            <p className="text-sm cursor-pointer text-[#aaabac]">
              {currentPost.author}
            </p>
            <img src={userWhite} alt="" className="w-8 ml-2" />
          </div>
        </div>
        <div className=" mt-2 m-7 w-[100vh] rounded-[8px] bg-[#1d2b50] shadow-[#191919] shadow-lg ">
          <div className="flex justify-between ">
            <div className="flex space-x-3 ml-2 ">
              {currentPost.etiquetas?.map((t) => {
                return (
                  <p className="px-1 rounded-xl font-semibold text-center self-center bg-[#191919] text-[#aaabac]">
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
          <div className="mt-1 mb-2 mx-10">
            <p className="text-[#aaabac] text-xl m-8 mt-12">
              {currentPost.content}
            </p>

            <div className=" justify-center space-x-8 m-8 mt-12">
              {currentPost.img?.map((img, index) => {
                return (
                  <div className={index}>
                    <img
                      src={img}
                      alt="img not found"
                      name={index}
                      className="max-w-lg mb-4 mx-auto cursor-pointer rounded-[8px] shadow-[#191919] shadow-lg"
                    />
                  </div>
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
                let countLikes = likes.filter((l) => l.commentId === c.id);
                let countdislikes = dislikes.filter(
                  (dl) => dl.commentId === c.id
                );
                return (
                  <div className="">
                    <div
                      key={c.id}
                      className="bg-[#1d2b50] rounded-[8px] shadow-[#191919] shadow-lg"
                    >
                      <div className="flex justify-between">
                        <p></p>
                        <div className="flex mt-2 ">
                          <p className="text-xl cursor-pointer text-[#aaabac]">
                            {c.author}
                          </p>
                          <img
                            src={userWhite}
                            alt=""
                            className="w-8 ml-2 mr-2"
                          />
                        </div>
                      </div>
                      <div className="-mt-10">
                        <div className="">
                          <p className="text-[#1b7161] ml-[2.5%]">
                            {countLikes.length}
                          </p>
                          <div
                            className="cursor-pointer hover:cursor-pointer"
                            onClick={(e) => handleLike(e, c)}
                          >
                            <FingerLike
                              likes={likes}
                              comment={c}
                              userId={userId}
                            />
                          </div>
                        </div>
                        <div className="">
                          <div
                            className="cursor-pointer hover:cursor-pointer"
                            onClick={(e) => handleDislike(e, c)}
                          >
                            <FingerDislike
                              dislikes={dislikes}
                              comment={c}
                              userId={userId}
                            />
                          </div>
                          <p className="text-[#C20000] ml-[2.5%]">
                            {countdislikes.length}
                          </p>
                        </div>
                      </div>
                      <div className="px-[30px] -mt-20 min-h-[80px]">
                        <p className="text-[#aaabac] text-xl ml-[8%] mr-[8%]">
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
