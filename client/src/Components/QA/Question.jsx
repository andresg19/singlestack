import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";

const Question = (/* id */) => {
  const { id } = useParams(id);
  const dispatch = useDispatch();
  return <div>Question</div>;
};

export default Question;
