import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { ScrollToTop } from 'react-scroll-to-top';
import {
  searchPost,
  clearState,
  GetLikes,
  GetDislikes,
  dislikeComment,
  getUsers,
} from "../../Redux/Actions/Actions";
import InputComment from "./InputComment";
import Nav from "../NavBar/Nav";
import Footer from "../Footer/Footer";
import { likeComment } from "./../../Redux/Actions/Actions";
import FingerLike from "./FingerLike";
import FingerDislike from "./FingerDislike";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Link } from "react-router-dom";
import backarrow from "../../assets/imgs/backarrow.png"

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
  const users = useSelector((state) => state.users)
  console.log(currentPost)
  const currentComments = useSelector((state) => state.commentsDetail);
  const initialComments = currentComments.slice(0, 1);
  console.log(initialComments)
  console.log(initialComments);
  const [moreComments, setMoreComments] = useState(false);
  const likes = useSelector((state) => state.likes);
  const dislikes = useSelector((state) => state.dislikes);
  console.log(currentPost);
  const { id } = useParams(); //postId
  const postId = currentPost.id;
  const userId = JSON.parse(localStorage.getItem("currentUser")).id;

  const imgUser = [];
  const usersImg =  users.map(element => {
                        console.log(imgUser)
                        if(element.fullname === currentPost.author) {
                          imgUser.push(element.img)
                        }});


 

  useEffect(() => {
    dispatch(searchPost(id));
    dispatch(GetLikes());
    dispatch(GetDislikes());
    dispatch(getUsers());
    window.scrollTo(0, 0)
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
    
    <div className="text-slate-200 font-sans font-normal leading-loose">
      <Nav />
      <Link to="/q-a">
      <button className=" rounded-sm shadow-md shadow-[#000000] font-semibold text-[#181cff70] text-lg ml-[10%] mt-[15%] lg:mt-10">
        <img src={backarrow} alt="" className="bg-black" />
      </button>
      </Link>
      <div className="mt-[7%] bg-black w-[80%] shadow-md shadow-[#19191950] ml-auto mr-auto rounded-[8px] lg:mt-0 lg:w-[60%]">
        <div className="inline-flex justify-between w-[100%] mt-3">
          <div className="inline-flex ">
            {currentPost.etiquetas?.map((t) => {
              return (
                <p className="px-1 rounded-xl text-center self-center text-sm bg-[#191919]">
                  #{t}{" "}
                </p>
              );
            })}
          </div>
          <div className="inline-flex mt-[7%] w-[16%] justify-around text-sm">
            <p className=" cursor-pointer underline">{currentPost.author}</p>    
          
                          <img src={imgUser[0]} alt="" className="w-16 h-14  ml-2" />
          </div>
        </div>

        <div className="w-[100%] ml-auto mr-auto mt-2 m-7 rounded-[8px] text-center">
          <h1 className=" ml-auto mr-auto text-lg underline">
            {currentPost.title}
          </h1>
          <div className="block  mt-5 mb-2 mx-10 ml-auto mr-auto ">
            <span className="grid  shadow-md shadow-[#0b0b0b] text-slate-200 font-light text-sm  break-all w-[90%] indent-1 ml-auto mr-auto">
              {currentPost.content}
            </span>

            <div className="block w-[100%] mt-[10%] text-sm text-slate-200">
              <p className="w-[100%] ml-auto mr-auto">Haz zoom en las imagenes con tu scroll wheel o doble toque</p>
              {currentPost.img?.map((img, index) => {
                return (
                  <div
                    className="w-[100%] mt-5 ml-auto mr-auto"
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
                          </TransformComponent>

                
                    </TransformWrapper>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-between mr-2">
            <p className="text-slate-400 text-sm ml-auto mt-5">
              {dateFormatter(currentPost.createdAt)}
            </p>
          </div>
        </div>
        <hr className="m-7 box-border border-slate-400" />
        <div className="flex justify-center">
          <div className="w-[100%] mt-[5%]">
            {!moreComments && initialComments.length
              ? initialComments.map((c) => {
                  let countLikes = likes.filter((l) => l.commentId === c.id);
                  let countdislikes = dislikes.filter(
                    (dl) => dl.commentId === c.id
                  );
                  return (
                    <div className="text-slate-200">
                      <div
                        key={c.id}
                        className=" shadow-[#000000] shadow-lg"
                      >
                        <div className="flex">
                        {
                        users.map(element => {
                          const imgUserC = []
                          if (element.fullname === c.author) {
                            imgUserC.push(element.img)
                            return(
                              <img src={imgUserC[0]} alt="" className="w-12 h-10  ml-2" />
                            )
                          } 
                        })
                        
                    }
                          <div className="flex mt-2 ">
                            <p className="font-ligth cursor-pointer underline">
                              {c.author}
                            </p>
                          </div>
                        </div>
                        <div className="text-center mt-10">
                        <div className="">
                          <p className="break-all  ml-[8%] mr-[8%]">{c.content}</p>
                          <div className="w-[100%]">
                            {c &&
                              c.img.map((img, index) => {
                                return (
                              <div
                    className="w-[100%] mt-5 ml-auto mr-auto"
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
                          </TransformComponent>

                
                    </TransformWrapper>
                  </div>
                                );
                              })}
                          </div>
                        </div>
                        </div>
                          <div className="grid">
                            <p className="text-[#1b7161] font-bold">
                              {countLikes.length}
                            </p>
                            <div
                              className="cursor-pointer hover:cursor-pointer"
                            >
                              <button 
                               className="cursor-grappin"
                              onClick={(e) => handleLike(e, c)}>
                              <FingerLike
                                likes={likes}
                                comment={c}
                                userId={userId}
                              />
                              </button>
                            </div>
                          </div>
                          <div className="">
                            <div>
                              <button 
                              className="cursor-grappin"
                              onClick={(e) => handleDislike(e, c)}>
                              <FingerDislike
                                dislikes={dislikes}
                                comment={c}
                                userId={userId}
                              />
                              </button>
                            </div>
                            <p className="text-[#C20000] font-bold ml-[2.5%]">
                              {countdislikes.length}
                            </p>
                          </div>
                          <div className="flex">

                        <p className="mt-5 text-sm ml-auto text-slate-400">
                          {dateFormatter(c.createdAt)}
                        </p>
                          </div>
                      </div>

                      <hr className="m-7 box-border border-slate-400" />
              
                    </div>
                  );
                })
              : moreComments === true &&
                currentComments.map((c) => {
                  let countLikes = likes.filter((l) => l.commentId === c.id);
                  let countdislikes = dislikes.filter(
                    (dl) => dl.commentId === c.id
                  );
                  return (
                    <div className="text-slate-200">
                    <div
                      key={c.id}
                      className=" shadow-[#000000] shadow-lg"
                    >
                      <div className="flex">
                      {
                      users.map(element => {
                        const imgUserC = []
                        if (element.fullname === c.author) {
                          imgUserC.push(element.img)
                          return(
                            <img src={imgUserC[0]} alt="" className="w-12 h-10  ml-2" />
                          )
                        } 
                      })
                      
                  }
                        <div className="mt-2 ">
                          <p className="font-ligth cursor-pointer underline">
                            {c.author}
                          </p>
                        </div>
                      </div>
                      <div className="text-center mt-10">
                      <div className="">
                        <p className=" break-all ml-[8%] mr-[8%]">{c.content}</p>
                        <div className="w-[100%]">
                          {c &&
                            c.img.map((img, index) => {
                              return (
                            <div
                  className="w-[100%] mt-5 ml-auto mr-auto"
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
                        </TransformComponent>

              
                  </TransformWrapper>
                </div>
                              );
                            })}
                        </div>
                      </div>
                      </div>
                        <div className="grid">
                          <p className="text-[#1b7161] font-bold">
                            {countLikes.length}
                          </p>
                          <div
                            className="cursor-pointer hover:cursor-pointer"
                          >
                            <button 
                             className="cursor-grappin"
                            onClick={(e) => handleLike(e, c)}>
                            <FingerLike
                              likes={likes}
                              comment={c}
                              userId={userId}
                            />
                            </button>
                          </div>
                        </div>
                        <div className="">
                          <div>
                            <button 
                            className="cursor-grappin"
                            onClick={(e) => handleDislike(e, c)}>
                            <FingerDislike
                              dislikes={dislikes}
                              comment={c}
                              userId={userId}
                            />
                            </button>
                          </div>
                          <p className="text-[#C20000] font-bold ml-[2.5%]">
                            {countdislikes.length}
                          </p>
                        </div>
                        <div className="flex">

                      <p className="mt-5 text-sm ml-auto text-slate-400">
                        {dateFormatter(c.createdAt)}
                      </p>
                        </div>
                    </div>

                    <hr className="m-7 box-border border-slate-400" />
            
                  </div>
                  );
                })}
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
            <InputComment postId={postId} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Question;
