import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postPost } from "../../Redux/Actions/Actions";
import Nav from "../NavBar/Nav";
import Footer from "../Footer/Footer";
import { etiquetas } from "./etiquetas"
import Swal from 'sweetalert2'


const AskQuestion = ({}) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    title: "",
    content: "",
    author: JSON.parse(localStorage.getItem("currentUser")).fullname,
    etiquetas:[],
  });

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

      <div className="grid text-slate-200 w-[100%] font-sans text-md justify-center mt-[2%]">
        <input
          className="w-[60%] placeholder:text-center shadow-md shadow-black box-shadow rounded-b-lg bg-[#191919] opacity-75 ml-auto  mr-auto m-3"
          type="text"
          name="title"
          placeholder="Titulo"
          value={input.title}
          onChange={(e) => {
            setInput({ ...input, [e.target.name]: e.target.value });
          }}
        />
        <textarea
          className="m-3 bg-[#191919] placeholder:italic opacity-75 shadow-md shadow-black box-shadow  rounded-b-lg "
          rows="10"
          cols="80"
          name="content"
          placeholder="Escribe tu duda..."
          value={input.content}
          onChange={(e) => {
            setInput({ ...input, [e.target.name]: e.target.value });
          }}
        />

<div className="ml-auto mr-auto max-h-[30vh] mt-10 w-[60%] cursor-pointer bg-[#191919] opacity-75 shadow-md shadow-black box-shadow  rounded-b-md overflow-y-auto">
<h1 className="font-medium underline">Busca tus etiquetas</h1>
        {
          etiquetas.map(etiqueta => (
            <div  className="flex mt-5 justify-between font-bold italic">
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
      


        
        <div class="flex justify-center items-center w-[60%] mt-10 ml-auto mr-auto">
          <label
            for="dropzone-file"
            class="flex flex-col justify-center items-center w-full h-64  rounded-lg shadow-sm shadow-black box-shadow hover:bg-black cursor-pointer bg-[#191919] opacity-75 "
          >
            <div class="flex flex-col justify-center items-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                class="mb-3 w-10 h-10 text-gray-400"
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
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span class="font-semibold">Click para cargar tu captura del código</span>
                <br />
                <span class="font-light ml-[4.3%]">(seleccionar y cargar de a una imagen)</span>
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF
              </p>
            </div>
            <input id="dropzone-file"
            type="file" 
            class="hidden" 
            multiple
            onChange={handleImage}
            />
          </label>
        </div>

        <div className="mt-10 ml-auto mr-auto">
        {img ?
          <img src={img} alt="" width={80} className="box-shadow shadow-black shadow-md" /> 
        : 
        <p className="">No hay imágenes</p>
        }
        </div>

        <button
          className="text-sm mt-[8%] font-normal rounded hover:bg-black bg-[#191919] shadow-lg shadow-[#19191980] w-[30%] ml-auto mr-auto"
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
