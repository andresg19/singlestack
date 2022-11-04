import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postComment } from "../../Redux/Actions/Actions";

const InputComment = ({ postId }) => {
  const dispatch = useDispatch();
  const fullComment = {
    postId: postId,
    author: JSON.parse(localStorage.getItem("currentUser")).fullname,
  };
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fullComment.content = input;
    dispatch(postComment(fullComment));
    window.location.reload();
  };
  return (
    <div className="inputComment">
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        value={input.content}
        placeholder="Escribe tu respuesta, cambia el mundo 😏"
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button onClick={handleSubmit}>Responder</button>
    </div>
  );
};

export default InputComment;
