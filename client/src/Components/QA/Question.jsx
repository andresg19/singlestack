import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { searchPost, clearState } from "../../Redux/Actions/Actions";

const Question = (/* id */) => {
  const dispatch = useDispatch();
  const currentPost = useSelector((state) => state.postDetail)
  const { id } = useParams();
  console.log(currentPost)
  console.log(id)

  useEffect(() => {
    dispatch(searchPost(id))
    return () => {
      dispatch(clearState());
    }
  }, []);

  return(
    <div className="containerQuestionDetail">
      <h1>{currentPost.title}</h1>
      <p>{currentPost.content}</p>
    </div> 
  )
};

export default Question;
