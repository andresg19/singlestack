import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  feedDislikes,
  feedLikes,
  getFeedDislikes,
  getFeedLikes,
  postFeedComments,
  searchFeedPost,
} from "../../Redux/Actions/Actions";
import fingerSVG from "../../assets/imgs/fingerSVG.svg";
import userWhite from "../../assets/imgs/userWhite.png";
import bookmark from "../../assets/imgs/bookmark.png";
import { dateFormatter } from "../QA/Question";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import FingerDislikesForo from "./FingerDislikesForo";
import FingerLikesForo from "./FingerLikesForo";
import close from "../../assets/imgs/close.svg";



const FeedPost = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id)
  const currentPost = useSelector((state) => state.feedPostDetail);
  const comments = useSelector((state) => state.feedPostComments);
  console.log(comments)
  console.log(currentPost)
  const postComments = comments.filter((c) => c.feedPostId === id);
  const initialComments = postComments.slice(0, 2);
  const likes = useSelector((state) => state.feedlikes);
  const postLikes = likes.filter((l) => l.postId === id);
  const dislikes = useSelector((state) => state.feeddislikes);
  const postDislikes = dislikes.filter((l) => l.postId === id);
  const actualUser = JSON.parse(localStorage.getItem("currentUser")).id;
  const [moreComments, setMoreComments] = useState(false);
  const [content, setContent] = useState("");
  const payload = {
    author: JSON.parse(localStorage.getItem("currentUser")).fullname,
    feedPostId: id,
  };

  //console.log("dislikes", dislikes);
  useEffect(() => {
    dispatch(getFeedLikes());
    dispatch(getFeedDislikes());
    dispatch(searchFeedPost(id))
  }, []);

  const handleLike = (e) => {
    e.preventDefault();
    dispatch(feedLikes(id, actualUser));
    window.location.reload();
  };
  const handleDislike = (e) => {
    e.preventDefault();
    dispatch(feedDislikes(id, actualUser));
    window.location.reload();
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    payload.content = content;
    dispatch(postFeedComments(payload));
    window.location.reload();
  };


  const [model, setModel] = useState(false);
  const [imgSrc, setImgSrc] = useState("");

  const getImg = (img) => {
    setImgSrc(img);
    setModel(true);
  };

  

  return (
    //div padre
    <div className="mt-10  w-[90%] ml-auto mr-auto">
      <div className="pt-4 mx-8 rounded-xl">
        <div className="pt-5 shadow-md bg-[#0f1629ac] shadow-[#0f0f0fbd]">
          <div className="flex justify-between mb-2 mx-2 text-black">
            <div className="flex -mt-2">
              <img src={userWhite} alt="" className="w-10 h-10  ml-2" />
              <div className="ml-2 t-mt-2">
                <p className="text-xl  text-gray-300">{currentPost.author}</p>
                <p className="text-gray-400">{dateFormatter(currentPost.createdAt)}</p>
              </div>
            </div>
            <img src={bookmark} alt="" className="w-6 h-6" />
          </div>

          <div className="m-5 p-4 ">
            <p className="flex justify-center text-2xl text-gray-300">
              {currentPost.content}
            </p>

            {model ? (
              <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
                <img src={imgSrc} alt="" className="max-w-3xl" />
                <img
                  src={close}
                  alt=""
                  className="mb-[89vh] ml-2 cursor-pointer w-[2rem] h-[2rem]"
                  onClick={() => setModel(false)}
                />
              </div>
            ) : null}
            <div className=" justify-center space-x-8 m-8 mt-12">
              {currentPost.img?.map((img, index) => {
                return (
                  <div key={index} onClick={() => getImg(img)}>
                    <img
                      src={img}
                      alt="img not found"
                      className="max-w-lg mb-4 mx-auto cursor-pointer rounded-[8px] shadow-[#191919] shadow-lg"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="-mt-10">
                        <div className="">
                          <p className="text-[#1b7161] ml-[2.5%]">
                            {postLikes.length}
                          </p>
                          <div
                            className="cursor-pointer hover:cursor-pointer"
                            onClick={(e) => handleLike(e)}
                          >
                            <FingerLikesForo
                              likes={postLikes}
                              userId={actualUser}
                            />
                          </div>
                        </div>
                        <div className="">
                          <div
                            className="cursor-pointer hover:cursor-pointer"
                            onClick={(e) => handleDislike(e)}
                          >
                            <FingerDislikesForo
                              dislikes={postDislikes}
                              userId={actualUser}
                            />
                          </div>
                          <p className="text-[#C20000] ml-[2.5%]">
                            {postDislikes.length}
                          </p>
                        </div>
                      </div>
        </div>
        <div className="pt-5 mx-10 shadow-md mt-2 bg-[#0f1629ac] shadow-[#0f0f0fbd]">
          <div className="flex border-b border-gray-400 mb-2 pb-5">
            <img src={userWhite} alt="" className="w-10 h-10  ml-2" />
            <input
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Agregar un comentario"
              className="w-full rounded-lg mx-2 outline-none text-black bg-gray-200 placeholder:pl-3"
            />
            <button type="submit" onClick={handleCommentSubmit}>
              Comentar
            </button>
          </div>
          {
           !moreComments && initialComments.length ? 
            initialComments.map((d) => (
              <div className="">
                <div className="flex text-black pb-4" key={d.id}>
                  <img src={userWhite} alt="" className="w-10 h-10  ml-2" />
                  <div className="bg-[#4a6fd356] rounded-xl w-full mx-2 px-1">
                    <div className="flex justify-between mx-1">
                      <p className="text-xl ml-2">{d.author}</p>
                      <p>{dateFormatter(d.createdAt)}</p>
                    </div>

                    <p className="text-center">{d.content}</p>
                  </div>
                </div>
              </div>
              ))
           :
           moreComments === true ?
           (
            comments.map((c) => (
              <div className="">
                <div className="flex text-black pb-4" key={c.id}>
                  <img src={userWhite} alt="" className="w-10 h-10  ml-2" />
                  <div className="bg-[#4a6fd356] rounded-xl w-full mx-2 px-1">
                    <div className="flex justify-between mx-1">
                      <p className="text-xl ml-2">{c.author}</p>
                      <p>{dateFormatter(c.createdAt)}</p>
                    </div>

                    <p className="text-center">{c.content}</p>
                  </div>
                </div>
              </div>
            )) 
            ) 
           : 
            (
            <h1 className="text-center text-red-700 pb-2 text-3xl">
              No hay comentarios aún
            </h1>
          )}
        </div>
        <button className="flex justify-end text-blue-700 underline mr-10 cursor-buttonointer pb-2" onClick={() => setMoreComments(!moreComments) }>
          cargar mas comentarios...
        </button>
      </div>
    </div>
  );
};
export default FeedPost;
