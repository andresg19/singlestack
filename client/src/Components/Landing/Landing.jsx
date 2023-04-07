import React, { useEffect } from "react";
import Nav from "../NavBar/Nav";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getFeedPosts, getPosts, getUsers } from "../../Redux/Actions/Actions";
import bannerone from "../../assets/imgs/web-developer-banner.png";
import bannerdos from "../../assets/imgs/bannerdos.jpg";
import Typewriter from "typewriter-effect";

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
    <div>
      <header>
        <Nav />
      </header>
      <main className="">
        <div className="grid mt-[30%] sm:mt-[5%] lg:mt-[10%]">
          <div className="grid mt-[20%] sm:mt-10 ">
            <h1 className="mx-auto text-5xl text-[#235760fa] animate-[floating_3s_ease-in-out_infinite] lg:ml-10 lg:mb-5">
              SingleStack
            </h1>
            <img
              src={bannerone}
              alt=""
              className="shadow-md mt-[40%] border-t-[#2c54592c] shadow-[#2b5d6641] rounded-br-full rounded-tl-full sm:mt-[12%] sm:w-[70%] sm:mx-auto lg:w-[50%] lg:mt-5"
            />
            <div className="text-2xl mx-auto border-none mt-[40%] text-[#ffffff57] sm:mt-[12%] lg:mt-10 lg:ml-[70%]">
              <Typewriter
                options={{
                  autoStart: true,
                  strings: ["De Developers...", "Para Developers"],
                  loop: true,
                }}
              />
            </div>
          </div>

            <hr className="border-0 h-1 bg-[#191919] lg:mt-10" />
          <div className="grid mt-[20%] lg:mt-[2%] lg:grid-cols-2">
            <div className="grid mt-[20%] bg-[#0606063e] shadow-md shadow-[#439ea610] text-center text-slate-200 w-[90%] mx-auto animate-[floating_3s_ease-in-out_infinite]">
              <h1 className="ml-auto mr-auto font-bold text-slate-500  text-2xl ">Q-A</h1>
              <span className="w-[80%] text-xl ml-auto mr-auto indent-1">
                Sección de preguntas y respuestas. En este espacio de
                SingleStack, cada usuario podrá realizar preguntas sobre
                diversos temas dirigidos a la programación de una manera
                sencilla, subiendo una o más capturas del código/error/pantalla
                y detallando el problema a resolver mediante un texto.
              </span>
            </div>
            <div className="grid mt-10 bg-[#0606063e] shadow-md shadow-[#439ea610] text-center text-slate-200 w-[90%] mx-auto rounded-xl animate-[floating_3s_ease-in-out_infinite] lg:mt-[20%]">
              <h1 className="ml-auto mr-auto font-bold text-slate-500 text-2xl ">FORO</h1>
              <span className="grid w-[80%] text-xl ml-auto mr-auto indent-1">
                En nuestro foro, los usuarios de SingleStack podran realizar
                posteos aportando material de estudio mediante la carga de
                archivos e imágenes como así también compartir enlaces o si bien
                un simple post para interactuar con otros usuarios.
              </span>
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-[15%]">
        <Footer />
      </footer>


    </div>
  
  );
};

export default Landing;
