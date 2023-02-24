import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dateFormatter } from "../QA/Question";
import Config from "./Config";
import DefaultSectionUser from "./DefaultSectionUser";
import PostsResourcesUser from "./PostsResourcesUser";
import QuestionsUsers from "./QuestionsUsers";
import userWhite from "../../assets/imgs/userWhite.png";


const Profile = () => {
  const [user, setUset] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
      ? JSON.parse(localStorage.getItem("currentUser")) 
      : []
  );
  console.log(user);
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
    <div className="flex">
    <div className="justify-center  grid m-[10%] w-[20%] py-2  bg-[#1C1C1C] rounded-xl">
      <div className="m-[10%] ml-auto mr-auto text-white text-sm py-4 text-center">
        {
          user.img ?(
        <img
          src={user.img}
          alt="not found"
          width={50}
          className="ml-auto mr-auto"
        />) :
        <img
          src={userWhite}
          alt="not found"
          width={50}
          className="ml-auto mr-auto"
        />
        }
        <h1>{user.fullname}</h1>
        <h3>{user.email}</h3>
      </div>
      <div className="m-[4%] ml-auto mr-auto py-4 text-white text-m text-center">
        <p 
        className="cursor-pointer"
        onClick={() => setSectionUser('questions')}>Ver mis preguntas</p>
        <p
        className="cursor-pointer"
        onClick={() => setSectionUser('posts')}
        >Ver mis publicaciones</p>
      </div>
      <div className="m-[10%] ml-auto mr-auto py-4 text-[#0000FF] text-xs text-center">
       <p 
       onClick={modalOpen}>
        Configurar perfil
      </p>

      

      </div>
    </div>
      
    {
        modal ? (
          <div className="w-[100%] mr-[5%] max-h-[80vh] mt-[5%] bg-[#1C1C1C]  rounded-xl">
            <Config />
            <button onClick={modalClose}>Cerrar ventana</button>
          </div>
        ) :
     sectionUser && sectionUser === 'initialValue' ? 
     ( 
     <div className="w-[100%] mr-[5%] max-h-[80vh] mt-[5%] bg-[#1C1C1C]  rounded-xl">
       <DefaultSectionUser /> 
       </div> 
     ) 
     :
     sectionUser === 'questions' ?
    (
    <div className="grid overflow-scroll scrollbar-hide w-[100%] mr-[5%] max-h-[80vh] mt-[5%] bg-[#1C1C1C]  rounded-xl">
      <QuestionsUsers />
    </div>
    ) 
    :
    sectionUser === 'posts' ?
    (
      <div className="grid overflow-scroll scrollbar-hide w-[100%] mr-[5%] max-h-[80vh] mt-[5%] bg-[#1C1C1C]  rounded-xl">
        <PostsResourcesUser />
      </div>
    ) 
    :
    null
    }
    </div>
  );
};

export default Profile;
