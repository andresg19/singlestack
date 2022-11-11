import React, { useEffect } from "react";
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
  const [img, setImg] = useState("");

  const handleImage = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImg(readerEvent.target.result);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(img);
    fullComment.content = input;
    fullComment.img = img;
    console.log(fullComment);
    dispatch(postComment(fullComment));
    window.location.reload();
  };

  console.log(fullComment);
  useEffect(() => {
    fullComment.img = img;
  }, [img]);
  return (
    <div className="">
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        value={input.content}
        placeholder="Escribe tu respuesta, cambia el mundo 😏"
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <input type="file" onChange={handleImage} />
      {img ? <img src={img} alt="" width={25} /> : <p>No hay imagen</p>}
      <button onClick={handleSubmit}>Responder</button>
    </div>
  );
};

export default InputComment;
