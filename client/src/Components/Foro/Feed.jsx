import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeedDislikes, getFeedLikes } from "../../Redux/Actions/Actions";
import fingerSVG from "../../assets/imgs/fingerSVG.svg";

const Feed = ({ post, comments, id }) => {
  const dispatch = useDispatch();

  const postComments = comments.filter((c) => c.feedPostId === id);
  const likes = useSelector((state) => state.feedlikes);
  const postLikes = likes.filter((l) => l.postId === id);
  const dislikes = useSelector((state) => state.feeddislikes);
  const postDislikes = dislikes.filter((l) => l.postId === id);

  console.log("postLikes", postLikes);
  //console.log("dislikes", dislikes);
  useEffect(() => {
    dispatch(getFeedLikes());
    dispatch(getFeedDislikes());
  }, []);

  //todos los post van a foro y de ahi se mapean
  //post solo
  //comentarios de ese post
  //likes y dislikes de ese post

  return (
    //div padre
    <div className=" mt-10 pt-8 mb-10 text-gray-100 w-[60%] h-[60vh] ml-auto mr-auto rounded-xl bg-[#0f1629ac] shadow-md shadow-[#0f0f0fbd] ">
      <div className="pt-4 mx-8 bg-gray-400 rounded-xl">
        <div className="mx-auto">
          <hr className="max-w-[80%] ml-8 border border-[#ffffffcb]" />
          <p className="ml-[85%] -mt-4">Ordenar por ↓</p>
        </div>

        <div className=" pt-5 border border-green-300">
          <h1 className="text-green-600">POST</h1>
          <p>{post.author}</p>
          <p>{post.content}</p>
          <p>{post.createdAt}</p>

          <div className="border border-yellow-400">
            <h2 className="text-green-600">
              Likes: {postLikes ? postLikes.length : 0}
            </h2>
            <h2 className="text-red-600">
              DisLikes: {postDislikes ? postDislikes.length : 0}
            </h2>
          </div>
        </div>
        <div className="pt-5 border border-orange-800">
          <h1 className="text-orange-800">COMMENT</h1>

          {postComments ? (
            postComments.map((c) => (
              <div className=" " key={c.id}>
                {c.content}
                <p>{c.author}</p>
                <p>{c.id}</p>
              </div>
            ))
          ) : (
            <h1 className="text-center text-red-700">No hay commentarios</h1>
          )}
        </div>
      </div>
    </div>
  );
};
export default Feed;
