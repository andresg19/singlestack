import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { searchPost, clearState } from "../../Redux/Actions/Actions";

function dateFormatter(state) {
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

const Question = (/* id */) => {
  const dispatch = useDispatch();
  const currentPost = useSelector((state) => state.postDetail);
  const { id } = useParams();

  console.log(currentPost.date);
  useEffect(() => {
    dispatch(searchPost(id));
    return () => {
      dispatch(clearState());
    };
  }, []);

  return (
    <div className="containerQuestionDetail">
      <p>{dateFormatter(currentPost.date)}</p>
      <h1>{currentPost.title}</h1>
      <p>{currentPost.content}</p>
    </div>
  );
};

export default Question;
