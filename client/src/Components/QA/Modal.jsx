import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postPost } from "../../Redux/Actions/Actions";

const Modal = ({}) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    title: "",
    content: "",
    author: JSON.parse(localStorage.getItem("currentUser")).fullname,
    etiquetas: "",
  });
  const [img, setImg] = useState("");

  console.log(input);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handlePost = (e) => {
    e.preventDefault();

    dispatch(postPost(input));

    window.location.reload();
  };

  /* useEffect(() => {}, []); */

  return (
    <div class="modal-lg">
      <div class="modal-content">
        <input
          type="text"
          name="title"
          placeholder="Titulo"
          value={input.title}
          onChange={handleChange}
        />
        <input
          type="textarea"
          name="content"
          placeholder="Contenido"
          value={input.content}
          onChange={handleChange}
        />
        <input
          type="text"
          name="etiquetas"
          placeholder="#javascript"
          value={input.etiquetas}
          onChange={handleChange}
        />
      </div>

      <button class="btn-sm" onClick={handlePost}>
        POSTEA Y QUITATE LA DUDA
      </button>
    </div>
  );
};

export default Modal;
