import React /* , { useEffect } */ from "react";
import { useDispatch } from "react-redux";
//import { feedAllComments } from "./../../Redux/Actions/Actions";

const Feed = ({ post, comments, id }) => {
  //const dispatch = useDispatch();

  const postComments = comments.filter((c) => c.feedPostId === id);
  console.log("🚀 ~ file: Feed.jsx:9 ~ Feed ~ postComments", postComments);

  //todos los post van a foro y de ahi se mapean
  //post solo
  //likes y dislikes de ese post
  //comentarios de ese post

  /*  useEffect(() => {
    dispatch(feedAllComments());
  }, []); */

  return (
    <div>
      {comments ? (
        comments.map((c) => (
          <div className="" key={c.id}>
            {c.content}
          </div>
        ))
      ) : (
        <h1 className="text-center text-red-700">No hay commentarios</h1>
      )}
    </div>
  );
};
export default Feed;
