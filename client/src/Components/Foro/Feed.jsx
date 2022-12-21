import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  feedDislikes,
  feedLikes,
  getFeedDislikes,
  getFeedLikes,
  postFeedComments,
} from "../../Redux/Actions/Actions";
import fingerSVG from "../../assets/imgs/fingerSVG.svg";
import userWhite from "../../assets/imgs/userWhite.png";
import bookmark from "../../assets/imgs/bookmark.png";
import { dateFormatter } from "../QA/Question";

const Feed = ({ post, comments, id }) => {
  const dispatch = useDispatch();

  const postComments = comments.filter((c) => c.feedPostId === id);
  const likes = useSelector((state) => state.feedlikes);
  const postLikes = likes.filter((l) => l.postId === id);
  const dislikes = useSelector((state) => state.feeddislikes);
  const postDislikes = dislikes.filter((l) => l.postId === id);
  const actualUser = JSON.parse(localStorage.getItem("currentUser")).id;

  const [content, setContent] = useState("");
  console.log(content);
  const payload = {
    author: JSON.parse(localStorage.getItem("currentUser")).fullname,
    feedPostId: post.id,
  };

  console.log("postLikes", postLikes);
  //console.log("dislikes", dislikes);
  useEffect(() => {
    dispatch(getFeedLikes());
    dispatch(getFeedDislikes());
  }, []);

  const handleLike = (e) => {
    e.preventDefault();
    dispatch(feedLikes(post.id, actualUser));
    window.location.reload();
  };
  const handleDislike = (e) => {
    e.preventDefault();
    dispatch(feedDislikes(post.id, actualUser));
    window.location.reload();
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    payload.content = content;
    dispatch(postFeedComments(payload));
    window.location.reload();
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
                <p className="text-xl  text-gray-300">{post.author}</p>
                <p className="text-gray-400">{dateFormatter(post.createdAt)}</p>
              </div>
            </div>
            <img src={bookmark} alt="" className="w-6 h-6" />
          </div>

          <div className="m-5 p-4 ">
            <p className="flex justify-center text-2xl text-gray-300">
              {post.content}
            </p>

            <div className="flex justify-evenly p-4">
              <img
                src="https://www.economist.com/sites/default/files/images/2015/09/blogs/economist-explains/code2.png"
                alt=""
                className="w-40"
              />
              <img
                src="https://www.economist.com/sites/default/files/images/2015/09/blogs/economist-explains/code2.png"
                alt=""
                className="w-40"
              />
              <img
                src="https://www.economist.com/sites/default/files/images/2015/09/blogs/economist-explains/code2.png"
                alt=""
                className="w-40"
              />
            </div>
          </div>

          <div className=" flex shadow-md shadow-[#0f0f0fbd] mx-10 py-2 justify-around">
            <h2 className="text-green-600">
              Útil: {postLikes ? postLikes.length : 0}
              <img
                src={fingerSVG}
                alt=""
                className="w-8"
                onClick={handleLike}
              />
            </h2>
            <h2 className="ml-2 text-red-600">
              No util: {postDislikes ? postDislikes.length : 0}
              <img
                src={fingerSVG}
                alt=""
                className="w-8 rotate-180"
                onClick={handleDislike}
              />
            </h2>
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
          {postComments.length ? (
            postComments.map((c) => (
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
          ) : (
            <h1 className="text-center text-red-700 pb-2 text-3xl">
              No hay comentarios aún
            </h1>
          )}
        </div>
        <p className="flex justify-end text-blue-700 underline mr-10 cursor-pointer pb-2">
          cargar mas comentarios...
        </p>
      </div>
    </div>
  );
};
export default Feed;
