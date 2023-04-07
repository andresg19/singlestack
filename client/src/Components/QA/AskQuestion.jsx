import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postPost } from "../../Redux/Actions/Actions";
import Nav from "../NavBar/Nav";
import Footer from "../Footer/Footer";
import { etiquetas } from "./etiquetas"
import Swal from 'sweetalert2'
import { useNavigate } from "react-router";


const AskQuestion = ({}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    title: "",
    content: "",
    author: JSON.parse(localStorage.getItem("currentUser")).fullname,
    etiquetas:[],

  });
  const actualUser = JSON.parse(localStorage.getItem("currentUser"));

  console.log(input);
  const [img, setImg] = useState("");
  console.log('soy img', img)
  const [imgArr, setImgArr] = useState([]);

  useEffect(() => {
    if (img !== "") {
      setImgArr([...imgArr, img]);
    }
    console.log(imgArr);
  }, [img]);



    const handleEtiquetas = (e) => {
    if (e.target.checked) {
      setInput({
        ...input,
        etiquetas: [...input.etiquetas, e.target.name],
      });
    } else {
      setInput({
        ...input,
        etiquetas: input.etiquetas.filter((et) => et !== e.target.name),
      });
    }
  }

  const handlePost = (e) => {
    e.preventDefault();
    if (!input.title || !input.content) {
      Swal.fire({
        icon: 'error',
        text: 'Ingrese el título o contenido de su pregunta.',

    })
    } else {
      input.img = imgArr;
      dispatch(postPost(input));
      Swal.fire({
        icon: 'success',
        text: 'Enviaste una pregunta, "OK" para continuar',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/q-a") 
      } 
      
    })


    }
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
      <div className="grid text-white w-[100%] text-md justify-center mt-[30%] sm:w-[70%] sm:mx-auto sm:mt-[15%] lg:mt-10 lg:text-sm">
      <input
        className="w-[60%] placeholder:text-center shadow-md shadow-black box-shadow rounded-b-lg bg-[#19191977]  ml-auto  mr-auto m-3 sm:text-md"
        type="text"
        name="title"
        placeholder="Titulo"
        value={input.title}
        onChange={(e) => {
          setInput({ ...input, [e.target.name]: e.target.value });
        }}
      />
      <textarea
        className="m-3 bg-[#19191977] placeholder:italic shadow-md shadow-black box-shadow  rounded-b-lg sm:text-sm lg:text-xs"
        rows="10"
        cols="80"
        name="content"
        placeholder="Escribe tu duda..."
        value={input.content}
        onChange={(e) => {
          setInput({ ...input, [e.target.name]: e.target.value });
        }}
      />

<div className="ml-auto mr-auto max-h-[30vh] mt-10 w-[60%] cursor-pointer bg-[#19191977] shadow-md shadow-black box-shadow  rounded-b-md  overflow-y-scroll">
<h1 className="font-black text-slate-400 sm:text-sm">Busca tus etiquetas</h1>
      {
        etiquetas.map(etiqueta => (
          <div  className="flex mt-5 justify-between text-slate-300 font-black italic sm:text-xs" key={etiqueta}>
            <input
              className= "" 
              type="checkbox"
              name={etiqueta}
              value={etiqueta.slice(1)}
              onChange={(e) => handleEtiquetas(e)}
            />
            <label>{etiqueta}</label>

            <hr />
            
          </div>
            ))
      }
</div>
    


      
      <div className="flex justify-center items-center w-[100%] mt-10 ml-auto mr-auto">
        <label
          for="dropzone-file"
          className="flex flex-col justify-center text-center w-80 h-64  rounded-lg shadow-sm shadow-black box-shadow hover:bg-black cursor-pointer bg-[#191919] opacity-75 sm:w-60 sm:h-44 "
        >
          <div className="flex flex-col justify-center items-center pt-5 pb-6">
            <svg
              aria-hidden="true"
              className="mb-3 w-10 h-10 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click para cargar tu captura del código</span>
              <br />
              <span className="font-light ">(seleccionar y cargar de a una imagen)</span>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF
            </p>
          </div>
          <input id="dropzone-file"
          type="file" 
          className="hidden" 
          multiple
          onChange={handleImage}
          />
        </label>
      </div>

      <div className="flex justify-around mt-4">
      {imgArr?.map((i) => {
        return <img src={i} alt="" className="w-32" />;
      })}
      </div>

      <button
        className="text-sm mt-[8%] font-black text-slate-200 rounded hover:bg-black bg-[#191919] shadow-lg shadow-[#19191980] w-[30%] ml-auto mr-auto sm:text-xs"
        onClick={handlePost}
      >
        REALIZAR PREGUNTA
      </button>
    </div> 
    
 

    <Footer />
  </div>
);
};

export default AskQuestion;
