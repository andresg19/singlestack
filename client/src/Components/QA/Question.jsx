import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  searchPost,
  clearState,
  ayudaComment,
} from "../../Redux/Actions/Actions";
import InputComment from "./InputComment";
import Nav from "../NavBar/Nav";
import Footer from "../Footer/Footer";
import bookmark from "../../assets/imgs/bookmark.png";
import share from "../../assets/imgs/share.png";
import userWhite from "../../assets/imgs/userWhite.png";
import finger from "../../assets/imgs/finger.png";

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
  console.log("soycurrentPost", currentPost);
  const { id } = useParams();
  const postId = currentPost.id;
  const [idComment, setIdComment] = useState("");
  const [like, setLike] = useState(true);

  useEffect(() => {
    dispatch(searchPost(id));
    return () => {
      dispatch(clearState());
    };
  }, []);

  const handleAyuda = (e) => {
    e.preventDefault();
    dispatch(ayudaComment(idComment, like));
  };

  return (
    <div className="">
      <Nav />
      <div className=" inline-block ml-[25%] mt-6 bg-[#D9D9D9] ">
        <div className="flex justify-between mt-3 ml-2 mr-2 font-medium">
          <div className="">
            <h1 className="">{currentPost.title}</h1>
          </div>
          <div className="flex">
            <p>{currentPost.author}</p>
            <img src={userWhite} alt="" className="w-8 ml-2" />
          </div>
        </div>
        <div className=" mt-2 m-7 border w-[100vh]  border-black bg-[#46899B]">
          <div className="flex justify-between mt-2">
            <div className="flex space-x-3 ml-2 ">
              {currentPost.etiquetas?.map((t) => {
                return (
                  <p className="bg-[#3232323d] px-1 rounded-xl font-semibold text-center self-center">
                    #{t}{" "}
                  </p>
                );
              })}
            </div>

            <img src={bookmark} alt="" className="w-8 mr-1" />
          </div>
          <div className="mt-1 mb-2 mx-10   ">
            <p className="text-white text-xl m-8 mt-12">
              {currentPost.content}
            </p>

            <div className="flex justify-center space-x-8 m-8 mt-12">
              {currentPost.img?.map((i) => {
                return (
                  <img
                    src={i}
                    alt="img not found"
                    className="w-[25%] cursor-pointer"
                    href={i}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex justify-between mr-2">
            <img src={share} alt="" className="w-8 ml-2 mb-2" />
            <p className="font-medium">
              {dateFormatter(currentPost.createdAt)}
            </p>
          </div>
        </div>
        <hr className="m-7 box-border border-slate-400" />
        <div className="flex justify-center">
          <div className="w-[100vh]">
            {currentComments &&
              currentComments.map((c) => {
                console.log("soy e comments", c);
                setIdComment(c.id);
                return (
                  <div className="">
                    <div key={c.id} className="bg-[#AAABAC]">
                      <div className="flex justify-between">
                        <p></p>
                        <div className="flex mt-2 ">
                          <p>{c.author}</p>
                          <img
                            src={userWhite}
                            alt=""
                            className="w-8 ml-2 mr-2"
                          />
                        </div>
                      </div>
                      <div className="-mt-10">
                        <p className="text-green-500 ml-[25px]">
                          {currentComments && currentComments.ayuda}
                        </p>
                        <img
                          src={finger}
                          alt=""
                          className="w-8 ml-2 mb-2 cursor-pointer"
                          onClick={() => handleAyuda}
                        />
                        <img
                          src={finger}
                          alt=""
                          className="w-8 ml-[0.45rem] rotate-180 cursor-pointer"
                          value={like.dislike}
                          onClick={handleAyuda}
                        />
                        <p className="text-red-500 ml-3">
                          {currentComments && currentComments.ayuda}
                        </p>
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
                                    className="max-w-lg cursor-pointer mx-auto"
                                  />
                                </div>
                              );
                            })}
                        </div>
                      </div>
                      <div className="flex justify-between mx-2 pb-2">
                        <img src={share} alt="" className="w-8  rotate-180 " />
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
