import React, { useEffect } from "react";
import Nav from "../NavBar/Nav"
import Footer from "../Footer/Footer"
import { useDispatch, useSelector } from 'react-redux'
import { getFeedPosts, getPosts, getUsers } from "../../Redux/Actions/Actions";
/* import Footer from "../Footer/Footer";
import Nav from "../NavBar/Nav"; */

const Landing = () => {
  const posts = useSelector((state) => state.feedPosts);
  const preguntas = useSelector((state) => state.posts);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  console.log(posts);

  useEffect(() => {
    dispatch(getFeedPosts());
    dispatch(getPosts());
    dispatch(getUsers());
  }, []);

  return (
    <div className="">
      <Nav />

      <div className="grid grid-rows-3 grid-flow-col gap-4 font-sans text-lg mt-[5%] w-[100%] ml-auto mr-auto h-[70vh]">
        <div
          className="grid row-span-3 rounded-md bg-black opacity-50 shadow-md shadow-black transition-none duration-700 ease-in-out transform 
                       hover:scale-110  mt-[20%] ml-[7%] w-[70vh] h-[50%]"
        >
          <h1 className="text-slate-600 mt-5 ml-auto mr-auto text-3xl font-medium italic">
            SingleStack
          </h1>
          <div className="flex justify-around text-sm">
            <h1 className="text-white">Posteos realizados {posts.length}</h1>
            <h1 className="text-white">
              Preguntas realizadas {preguntas.length}
            </h1>
            <h1 className="text-white">Cantidad de usuarios {users.length}</h1>
          </div>
        </div>
        <div
          className="grid col-span-2 rounded-md ml-auto mr-10  bg-black w-[70%] opacity-50 shadow-md shadow-black transition-none duration-700 ease-in-out transform 
                       hover:scale-110 text-white"
        >
          <h1 className="ml-auto mr-auto mt-2 text-slate-400 italic font-medium">
            NUESTRO FORO
          </h1>
          <span className="grid w-[80%] text-lg  ml-auto mr-auto indent-1">
            En nuestro foro, los usuarios de SingleStack podran realizar posteos
            aportando material de estudio mediante la carga de archivos e
            imágenes como así también compartir enlaces o si bien un simple post
            para interactuar con otros usuarios.
          </span>
        </div>
        <div
          className="grid row-span-2 ml-auto mr-10 w-[70%] h-[70%] col-span-2 rounded-md  bg-black opacity-50 shadow-md shadow-black transition-none duration-700 ease-in-out transform 
                       hover:scale-110  text-white  mt-[10%] "
        >
          <h1 className="ml-auto mr-auto mt-2 text-slate-400 italic font-medium">
            Q-A
          </h1>
          <span className="w-[80%] text-lg ml-auto mr-auto indent-1">
            Sección de preguntas y respuestas. En este espacio de SingleStack, cada usuario podrá realizar preguntas sobre diversos temas dirigidos a la programación de una manera sencilla, subiendo una o más capturas del código/error/pantalla y detallando el problema a resolver mediante un texto.
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
