import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearState,
  feedDislikes,
  feedLikes,
  getFeedDislikes,
  getFeedLikes,
  getUsers,
  postFeedComments,
  searchFeedPost,
} from "../../Redux/Actions/Actions";
import { dateFormatter } from "../QA/Question";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import FingerDislikesForo from "./FingerDislikesForo";
import FingerLikesForo from "./FingerLikesForo";
import Nav from "../NavBar/Nav";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch"
import backarrow from "../../assets/imgs/backarrow.png"
import Footer from "../Footer/Footer";



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
  const users = useSelector((state) => state.users);
  const actualUser = JSON.parse(localStorage.getItem("currentUser")).id;
  const actualUserImg = JSON.parse(localStorage.getItem("currentUser"));
  const [moreComments, setMoreComments] = useState(false);
  const [content, setContent] = useState("");
  const payload = {
    author: JSON.parse(localStorage.getItem("currentUser")).fullname,
    feedPostId: id,
  };

  //console.log("dislikes", dislikes);
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getFeedLikes());
    dispatch(getFeedDislikes());
    dispatch(searchFeedPost(id));
    dispatch(getUsers());
    return () => {
      dispatch(clearState());
    };
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
    <div className="text-slate-200 font-sans font-normal leading-loose w-[100%] ml-auto mr-auto">
       <Nav />
        <div className="bg-black mx-auto mt-[15%] w-[100%] rounded-xl shadow-md shadow-[#201d1d67] lg:mt-[5%] lg:w-[60%]">
        <Link to="/foro">
      <button className=" rounded-sm shadow-md shadow-[#000000] font-semibold text-[#181cff70] text-lg ml-[10%] mt-[15%] lg:mt-10">
        <img src={backarrow} alt="" className="bg-black" />
      </button>
      </Link>
          <div className="flex justify-between mx-2">
            <div className="flex mt-5">
            {
                      users.map(element => {
                        const imgUser = []
                        console.log(imgUser)
                        if(element.fullname === currentPost.author) {
                          imgUser.push(element.img)
                          return(
                            <img src={imgUser[0]} alt="" className="w-12 h-10  ml-2" />
                          )
                        }
                      })
                    }
              <div className="ml-2 t-mt-2">
                <p className="underline-offset-2 underline lg:text-sm ">{currentPost.author}</p>
                <p className="lg:text-xs">{dateFormatter(currentPost.createdAt)}</p>
              </div>
            </div>
          </div>

          <div className="w-[100%] ml-auto mr-auto mt-2 m-7 rounded-[8px]">
          <div className="block  mt-10 mx-auto ">
            <span className="grid  shadow-md shadow-[#0b0b0b] text-slate-200 font-light text-sm  break-all w-[90%] indent-1 ml-auto mr-auto lg:text-xs">
              {currentPost.content}
            </span>

            <div className="block max-w-[100%] mt-[10%] text-slate-200 text-center">
             {
              currentPost.img ?
              <p className="w-[100%] text-sm lg:text-xs">Haz zoom en las imagenes con tu scroll wheel o doble toque</p> : null
             }
              {currentPost.img?.map((img, index) => {
                return (
                  <div
                    className="w-[90%] mt-5 ml-auto mr-auto"
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
          <div className="mt-5">
                        <div className="">
                          <p className="text-[#1b7161] ml-[2.5%]">
                            {postLikes.length}
                          </p>
                          <div>
                            <button
                            onClick={(e) => handleLike(e)}
                            className="cursor-grappin"
                            >
                            <FingerLikesForo
                              likes={postLikes}
                              userId={actualUser}
                            />
                          </button>
                          </div>
                        </div>
                        <div >
                          <div>
                            <button
                            onClick={(e) => handleDislike(e)}
                            className="cursor-grappin">

                            <FingerDislikesForo
                              dislikes={postDislikes}
                              userId={actualUser}
                            />
                            </button>
                          </div>
                          <p className="text-[#C20000] ml-[2.5%]">
                            {postDislikes.length}
                          </p>
                        </div>
                      </div>
        </div>
        <div className= "pt-5 bg-[#050505] mx-auto w-[100%] rounded-xl shadow-md shadow-[#201d1d67] lg:w-[60%]">
          <div className="flex border-b border-gray-400 mb-2 pb-5">
            <img src={actualUserImg.img} alt="" className="w-10 h-10 rounded-3xl ml-2" />
            <input
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Agregar un comentario"
              className="w-full rounded-lg mx-2 outline-none bg-[#191919] placeholder:pl-3 lg:text-sm"
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
                {
                      users.map(element => {
                        const imgUser = []
                        console.log(imgUser)
                        if(element.fullname === d.author) {
                          imgUser.push(element.img)
                          return(
                            <img src={imgUser[0]} alt="" className="w-12 h-10 rounded-full ml-2" />
                          )
                        }
                      })
                    }
                  <div className=" bg-[#191919] rounded-xl w-full mx-2 px-1">
                    <div className="flex justify-between mx-1">
                      <p className="text-md ml-2 underline underline-offset-2 lg:text-sm ">{d.author}</p>
                      <p className="lg:text-xs">{dateFormatter(d.createdAt)}</p>
                    </div>
                    <span className="text-center grid w-[100%] break-all text-lg mt-2 indent-1 ml-auto mr-auto lg:text-sm">{d.content}</span>
                  </div>
                </div>
            
              </div>
              ))
      
           :
           moreComments === true ?
           (
            comments.map((c) => (
              <div className="">
                <div className="flex pb-4" key={c.id}>
                {
                      users.map(element => {
                        const imgUser = []
                        console.log(imgUser)
                        if(element.fullname === c.author) {
                          imgUser.push(element.img)
                          return(
                            <img src={imgUser[0]} alt="" className="w-12 h-10 rounded-full ml-2" />
                          )
                        }
                      })
                    }
                  <div className=" bg-[#191919] rounded-xl w-full mx-2 px-1">
                    <div className="flex justify-between mx-1">
                      <p className="text-md ml-2 underline underline-offset-2 lg:text-sm ">{c.author}</p>
                      <p className="lg:text-xs">{dateFormatter(c.createdAt)}</p>
                    </div>
                    <span className="text-center grid w-[100%] break-all text-lg mt-2 indent-1 ml-auto mr-auto lg:text-sm">{c.content}</span>
                  </div>
                </div>
            
              </div>
            )) 
            ) 
           : 
          null}
          {
            moreComments === true ? (
              <button className="bg-[#070a13] hover:bg-[#030509] w-auto rounded-sm shadow-md shadow-[#000000] font-semibold text-[#9ab6bec1] text-sm ml-[1%] mt-8" onClick={() => setMoreComments(!moreComments) }>
              Ocultar comentarios
            </button>

            ) : 
                  (
                <button className="bg-[#070a13] hover:bg-[#030509] w-auto rounded-sm shadow-md shadow-[#000000] font-semibold text-[#9ab6bec1] text-sm ml-[1%] mt-8" onClick={() => setMoreComments(!moreComments) }>
                  Cargar comentarios...
                </button>
            )
          }
        </div>
        <Footer />
    </div>
  );
};
export default FeedPost;
