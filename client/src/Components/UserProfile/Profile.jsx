import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dateFormatter } from "../QA/Question";
import Config from "./Config";
import DefaultSectionUser from "./DefaultSectionUser";
import PostsResourcesUser from "./PostsResourcesUser";
import QuestionsUsers from "./QuestionsUsers";
import Nav from "../NavBar/Nav";
import Footer from "../Footer/Footer";


const Profile = () => {
  const [user, setUset] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
      ? JSON.parse(localStorage.getItem("currentUser")) 
      : []
  );
  console.log(user.img);
  const [modal, setModal] = useState(false);
  
  const modalOpen = () => {
    setModal(true);
    console.log("open");
  };
  const modalClose = () => {
    setModal(false);
    console.log("close");
  };

  const [sectionUser, setSectionUser] = useState(('initialValue'));
  console.log(sectionUser)

  const date = dateFormatter(user.createdAt);

  return (
    <div className="">
      <Nav />
      <div className="grid mt-[15%] sm:mt-[3%] lg:grid-cols-2 divide-x lg:mt-0">
    <div className="justify-center  grid m-[10%] w-[80%] py-2  bg-[#1616165d] rounded-xl lg:w-[40%]">
      <div className="m-[10%] ml-auto mr-auto text-white py-4 text-center">
      
        <img
          src= {user.img}
          alt="not found"
          className="ml-auto mr-auto w-[25%] rounded-full"
        />

        <h1 className="text-lg" >{user.fullname}</h1>
        <h3 className="text-sm">{user.email}</h3>
      </div>
      <div className="m-[4%] ml-auto mr-auto py-4 text-white text-m text-center">
        <p 
        className="cursor-pointer text-[#0000ffa3] text-sm font-bold "
        onClick={() => setSectionUser('questions')}>Ver mis preguntas</p>
        <p
        className="cursor-pointer text-[#0000ffa3] text-sm font-bold "
        onClick={() => setSectionUser('posts')}
        >Ver mis publicaciones</p>
      </div>
      <div className="m-[10%] ml-auto mr-auto py-4 text-[#0000ffa3] text-sm font-bold text-center">
       <p 
       onClick={modalOpen}>
        Configurar perfil
      </p>

      

      </div>
    </div>
 
    {
        modal ? (
          <div className="w-[100%]  max-h-[80vh] mt-[2%] bg-black  rounded-xl lg:border-none">
            <Config />
            <button onClick={modalClose} className="text-white bg-[#191919] mt-5 lg:text-xs lg:mt-2">Cerrar ventana</button>
          </div>
        ) :
     sectionUser && sectionUser === 'initialValue' ? 
     ( 
     <div className=" w-[100%] mr-[5%] max-h-[80vh] mt-[2%] bg-black  rounded-xl lg:w-[80%] lg:border-none lg:mt-[15%] lg:max-h-[70vh]">
       <DefaultSectionUser /> 
       </div> 
     ) 
     :
     sectionUser === 'questions' ?
    (
    <div className=" overflow-scroll  w-[100%] mr-[5%] max-h-[80vh] mt-[2%] bg-black  rounded-xl lg:w-[80%] lg:border-none lg:mt-[15%] lg:max-h-[70vh]">
      <QuestionsUsers />
    </div>
    ) 
    :
    sectionUser === 'posts' ?
    (
      <div className=" overflow-scroll  w-[100%] mr-[5%] max-h-[80vh] mt-[2%] bg-black  rounded-xl lg:w-[80%] lg:border-none lg:mt-[15%] lg:max-h-[70vh]">
        <PostsResourcesUser />
      </div>
    ) 
    :
    null
    }

      </div>
      <Footer />
    </div>
  );
};

export default Profile;
