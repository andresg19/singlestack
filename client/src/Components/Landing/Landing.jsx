import React, { useEffect } from "react";
import Nav from "../NavBar/Nav"
import Footer from "../Footer/Footer"
import { useDispatch, useSelector } from 'react-redux'
import { getFeedPosts, getPosts, getUsers } from "../../Redux/Actions/Actions";
/* import Footer from "../Footer/Footer";
import Nav from "../NavBar/Nav"; */

const Landing = () => {
 const posts = useSelector((state) => state.feedPosts)
 const preguntas = useSelector((state) => state.posts);
 const users = useSelector((state) => state.users);
 const dispatch = useDispatch();
console.log(posts)

useEffect(() => {
  dispatch(getFeedPosts());
  dispatch(getPosts());
  dispatch(getUsers());
}, []);

  return <div className="">
    <Nav />
    
    <div className="grid grid-rows-3 grid-flow-col gap-4 font-mono text-lg mt-12 w-100  h-[60vh]">
  <div className="grid row-span-3 rounded-md bg-black opacity-50 shadow-md shadow-black transition-none duration-700 ease-in-out transform 
                       hover:scale-110  mt-[10%] ml-10 w-[80%] h-[50%]">
    <h1 className="text-blue-800 mt-5 ml-auto mr-auto text-3xl">SingleStack</h1>
  <div className="flex justify-around">
    <h1 className="text-white">Posteos realizados {posts.length}</h1>
    <h1 className="text-white">Preguntas realizadas {preguntas.length}</h1>
    <h1 className="text-white">Cantidad de usuarios {users.length}</h1>
  </div>
 </div>
  <div className="grid col-span-2 rounded-md bg-black opacity-50 shadow-md shadow-black transition-none duration-700 ease-in-out transform 
                       hover:scale-110 text-white mr-10">
    <h1 className="ml-auto mr-auto mt-2">FORO</h1>
    </div>
  <div className="grid row-span-2 col-span-2 rounded-md  bg-black opacity-50 shadow-md shadow-black transition-none duration-700 ease-in-out transform 
                       hover:scale-110  text-white mr-10 mt-5">
    <h1 className="ml-auto mr-auto mt-2">
      Q-A
      </h1>
    </div>
</div>
<Footer />
  </div>;
};

export default Landing;
