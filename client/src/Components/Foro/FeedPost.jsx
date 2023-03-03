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
import Nav from "../NavBar/Nav";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch"



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
    <div className="mt-10 text-slate-200 font-sans font-normal leading-loose w-[90%] ml-auto mr-auto">
        <div className="bg-black mx-auto w-[70%] rounded-xl shadow-md shadow-[#201d1d67] ">
          <div className="flex justify-between mx-2">
            <div className="flex mt-5">
              <img src={userWhite} alt="" className="bg-white w-10 h-10  ml-2" />
              <div className="ml-2 t-mt-2">
                <p className="">{currentPost.author}</p>
                <p className="">{dateFormatter(currentPost.createdAt)}</p>
              </div>
            </div>
          </div>

          <div className="w-[100%] ml-auto mr-auto mt-2 m-7 rounded-[8px]">
          <div className="block  mt-1 mb-2 mx-10 ml-auto mr-auto ">
            <span className="grid  shadow-md shadow-[#0b0b0b] text-slate-200 font-light text-lg  break-all w-[60%] indent-1 ml-auto mr-auto">
              {currentPost.content}
            </span>

            <div className="block max-w-[100%] mt-[10%] text-slate-200">
              <p className="w-[50%] ml-auto mr-auto">Haz zoom en las imagenes con tu scroll wheel o doble toque</p>
              {currentPost.img?.map((img, index) => {
                return (
                  <div
                    className="w-[60%] mt-5 ml-auto mr-auto"
                    key={index}
            
                  >
                    <TransformWrapper
                      defaultScale={1}
                      defaultPositionX={100}
                      defaultPositionY={200}
                    >
                    
                          <TransformComponent>
                            <img
                              src={img}
                              alt="img not found"
                              className="w-[100%] mb-4 mx-auto cursor-pointer rounded-[8px]  shadow-md shadow-[#131313]"
                            />
                          </TransformComponent >

                
                    </TransformWrapper>
                  </div>
                );
              })}
            </div>
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
        <div className= "pt-5 bg-[#050505] mx-auto w-[70%] rounded-xl shadow-md shadow-[#201d1d67] ">
          <div className="flex border-b border-gray-400 mb-2 pb-5">
            <img src={userWhite} alt="" className="bg-white w-10 h-10  ml-2" />
            <input
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Agregar un comentario"
              className="w-full rounded-lg mx-2 outline-none bg-[#191919] placeholder:pl-3"
            />
            <button type="submit" onClick={handleCommentSubmit}>
              Comentar
            </button>
          </div>
          {
           !moreComments && initialComments.length ? 
            initialComments.map((d) => (
              <div className="">
                <div className="flex pb-4" key={d.id}>
                  <img src={userWhite} alt="" className="w-10 h-10  ml-2" />
                  <div className=" bg-[#191919] rounded-xl w-full mx-2 px-1">
                    <div className="flex justify-between mx-1">
                      <p className="text-xl ml-2">{d.author}</p>
                      <p>{dateFormatter(d.createdAt)}</p>
                    </div>
                    <span className="text-center grid w-[60%] break-all text-lg  indent-1 ml-auto mr-auto">{d.content}</span>
                  </div>
                </div>
                <button className="flex justify-end text-blue-700 underline mr-10 cursor-buttonointer pb-2" onClick={() => setMoreComments(!moreComments) }>
                  cargar mas comentarios...
                </button>
            
              </div>
              ))
      
           :
           moreComments === true ?
           (
            comments.map((c) => (
              <div className="">
                <div className="flex pb-4" key={c.id}>
                  <img src={userWhite} alt="" className="w-10 h-10  ml-2" />
                  <div className=" bg-[#191919] rounded-xl w-full mx-2 px-1">
                    <div className="flex justify-between mx-1">
                      <p className="text-xl ml-2">{c.author}</p>
                      <p>{dateFormatter(c.createdAt)}</p>
                    </div>

                    <span className="text-center grid w-[60%] break-all text-lg  indent-1 ml-auto mr-auto">{c.content}</span>
                  </div>
                </div>
              </div>
            )) 
            ) 
           : 
          null}
        </div>
    </div>
  );
};
export default FeedPost;
