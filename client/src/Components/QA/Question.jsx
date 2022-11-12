import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { searchPost, clearState } from "../../Redux/Actions/Actions";
import InputComment from "./InputComment";
import Nav from "../NavBar/Nav";
import Footer from "../Footer/Footer";
import bookmark from "../../assets/imgs/bookmark.png";
import share from "../../assets/imgs/share.png";
import userWhite from "../../assets/imgs/userWhite.png";

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

  useEffect(() => {
    dispatch(searchPost(id));
    return () => {
      dispatch(clearState());
    };
  }, []);

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
            <p className="text-[#46899B]"></p>

            <img src={bookmark} alt="" className="w-8 ml-4" />
          </div>
          <div className="mt-1 mb-2 mx-10 h-[43vh] border border-black">
            <p className="text-white m-8">{currentPost.content}</p>

            <div className="flex justify-center space-x-8">
              {currentPost.img?.map((i) => {
                return <img src={i} alt="img not found" className="w-[20%] " />;
              })}
            </div>

            <div className="flex border border-black">
              <div className="flex mt-10 ">
                {currentPost.etiquetas?.map((t) => {
                  return (
                    <p className="bg-[#3232323d] rounded-xl font-semibold mt-10">
                      #{t}{" "}
                    </p>
                  );
                })}
              </div>
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
        <div className="grid w-[100vh] h-[100%] m-7 border border-red-600">
          <div className="grid">
            <h2>Comentarios</h2>
            {currentComments &&
              currentComments.map((e) => {
                console.log("soy e comments", e);
                return (
                  <div key={e.id}>
                    <p>{dateFormatter(e.createdAt)}</p>
                    <p>{e.author}</p>
                    <p>{e.content}</p>
                    {e &&
                      e.img.map((i) => {
                        return <img src={i} alt="img not found" width={50} />;
                      })}
                    <hr />
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
