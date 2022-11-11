import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postPost } from "../../Redux/Actions/Actions";
import Nav from "../NavBar/Nav";
import Footer from "../Footer/Footer"

const AskQuestion = ({}) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    title: "",
    content: "",
    author: JSON.parse(localStorage.getItem("currentUser")).fullname,
    etiquetas: "",
  });
  console.log(input)
  const [img, setImg] = useState("");
  const [imgArr, setImgArr] = useState([]);

  useEffect(() => {
    if(img !== "") {
      imgArr.push(img)
     }
     console.log(imgArr)
  }, [img]);


  const handlePost = (e) => {
    e.preventDefault();
    input.img = imgArr
    dispatch(postPost(input));

    window.location.reload();
  };

  const handleImage = (e) => {
 
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload  =  (readerEvent) => {
      setImg(readerEvent.target.result);
    };
  };


  return (
    <div className="">
      <Nav />
      <div className="grid w-[100%]  justify-center mt-[2%]">
        <input className="w-[60%] placeholder:text-center rounded-b-lg bg-[#aaabac5b] ml-auto shadow-lg shadow-[#1919191c] mr-auto m-3"
          type="text"
          name="title"
          placeholder="Titulo"
          value={input.title}
          onChange={(e) => {setInput({ ...input, [e.target.name]: e.target.value })}}
        />
        <textarea className="m-3 shadow-lg bg-[#aaabac5b] shadow-[#1919191c] rounded-b-lg "
          rows="10"
          cols="80"
          name="content"
          placeholder="Contenido"
          value={input.content}
          onChange={(e) => {setInput({ ...input, [e.target.name]: e.target.value })}}
        />
        <input className="m-3 placeholder:text-center shadow-lg rounded-b-lg bg-[#aaabac5b] shadow-[#1919191c]"
          type="text"
          name="etiquetas"
          placeholder="javascript python node"
          value={input.etiquetas}
          onChange={(e) => {setInput({ ...input, [e.target.name]: e.target.value })}}
        />
        <input className="m-3 ml-auto mr-auto shadow-lg bg-[#aaabac5b] shadow-[#1919191c]" 
        type="file" multiple onChange={handleImage} 
        />
        {img ? <img src={img} alt="" width={25} /> : <p>No hay imagen</p>}
      
      <button className="text-sm bg-[#aaabac5b] shadow-lg shadow-[#19191980] w-[30%] ml-auto mr-auto" onClick={handlePost}>
        POSTEA Y QUITATE LA DUDA
      </button>
      </div>

      <Footer />
    </div>
  );
};

export default AskQuestion;

/* 
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postPost } from "../../Redux/Actions/Actions";
import Nav from './../NavBar/Nav';

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
