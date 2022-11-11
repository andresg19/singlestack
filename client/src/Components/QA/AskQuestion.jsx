import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postPost } from "../../Redux/Actions/Actions";
import Nav from "../NavBar/Nav";

const AskQuestion = ({}) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    title: "",
    content: "",
    author: JSON.parse(localStorage.getItem("currentUser")).fullname,
    etiquetas: "",
  });
  console.log(input);
  const [img, setImg] = useState("");
  const [imgArr, setImgArr] = useState([]);

  useEffect(() => {
    if (img !== "") {
      setImgArr([...imgArr, img]);
    }
    console.log(imgArr);
  }, [img]);

  const handlePost = (e) => {
    e.preventDefault();
    input.img = imgArr;
    dispatch(postPost(input));
    window.location.reload();
  };

  const handleImage = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImg(readerEvent.target.result);
    };
  };

  return (
    <div className="">
      <Nav />
      <div className="">
        <input
          type="text"
          name="title"
          placeholder="Titulo"
          value={input.title}
          onChange={(e) => {
            setInput({ ...input, [e.target.name]: e.target.value });
          }}
        />
        <input
          type="textarea"
          name="content"
          placeholder="Contenido"
          value={input.content}
          onChange={(e) => {
            setInput({ ...input, [e.target.name]: e.target.value });
          }}
        />
        <input
          type="text"
          name="etiquetas"
          placeholder="javascript python node"
          value={input.etiquetas}
          onChange={(e) => {
            setInput({ ...input, [e.target.name]: e.target.value });
          }}
        />
        <input type="file" multiple onChange={handleImage} />
        {imgArr?.map((i) => {
          return <img src={i} alt="" width={25} />;
        })}
      </div>
      {/* 
      {imgArr?.map((i) => {
        return <img src={i} alt="" width={25} />;
      })}
      */}

      <button className="" onClick={handlePost}>
        POSTEA Y QUITATE LA DUDA
      </button>
    </div>
  );
};

export default AskQuestion;

/* 
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postPost } from "../../Redux/Actions/Actions";
import Nav from './../NavBar/Nav';
import { postComment } from './../../Redux/Actions/Actions';

const Modal = ({}) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    title: "",
    content: "",
    author: JSON.parse(localStorage.getItem("currentUser")).fullname,
  });
  const [img, setImg] = useState("");

  console.log(input);
  //  let fullname = currentUser.fullname;
  //  console.log('soyfullname', fullname)
  // setInput({ ...input, author: fullname });
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // const handleImage = (e) => {
  //   e.preventDefault();
  //   const reader = new FileReader();
  //   if (e.target.files[0]) {
  //     reader.readAsDataURL(e.target.files[0]);
  //   }
  //   reader.onload = (readerEvent) => {
  //     setImg(readerEvent.target.result);
  //   };
  // }

  const handlePost = (e) => {
    e.preventDefault();

    dispatch(postPost(input));

    window.location.reload();
  };

  useEffect(() => {
    // fullname = localStorage.getItem("fullname");
  }, []);

  return (
    <div class="">
      <div class="">
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
      </div>

      <button class="" onClick={handlePost}>
        POSTEA Y QUITATE LA DUDA
      </button>
    </div>
  );
};

export default Modal;


*/
