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
  const [img, setImg] = useState("");

  const handleImage = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files[0]);
      setImg({
        data: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('30', fullComment)
    fullComment.content = input;
    // console.log('31', fullComment)
    fullComment.img = img.data;
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
      <input
        type="file"
        accept=".jpg,.jpeg,.png,.webp,.doc,.blob,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        onChange={handleImage}
        // value={img}
      />
      {img ? <img src={img.data} alt="" width={25} /> : <p>No hay imagen</p>}
      <button onClick={handleSubmit}>Responder</button>
    </div>
  );
};

export default InputComment;
