import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { searchPost, clearState } from "../../Redux/Actions/Actions";
import InputComment from "./InputComment";

export function dateFormatter(state) {
  if (state && typeof state === "string") {
    let cutter = state.split("T");
    let dateSplit = cutter[0].split("-");
    let dateJoin = `${dateSplit[2]} ${dateSplit[1]} ${dateSplit[0]}`;
    let hourSplit = cutter[1].split(".")[0];

    return `${hourSplit.substring(0, 5)} - ${dateJoin}`;
  }

  return "Error en la fecha/hora del post";
}

const Question = (/* id */) => {
  const dispatch = useDispatch();
  const currentPost = useSelector((state) => state.postDetail);
  const currentComments = useSelector((state) => state.commentsDetail);
  console.log("soycurrentComments", currentComments);
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
      <div className="">
        <p>{dateFormatter(currentPost.createdAt)}</p>

        <p>User: {currentPost.author}</p>
        <h1>{currentPost.title}</h1>
        <p>{currentPost.content}</p>
      </div>
      <div className="">
        <div className="">
          <h2>Comentarios</h2>
          {currentComments &&
            currentComments.map((e) => {
              return (
                <div key={e.id}>
                  <p>{dateFormatter(e.createdAt)}</p>
                  <p>{e.author}</p>
                  <p>{e.content}</p>

                  {e.img && <img src={e.img} alt="" width={50} />}
                  <hr />
                </div>
              );
            })}
          <InputComment postId={postId} />
        </div>
      </div>
    </div>
  );
};

export default Question;
