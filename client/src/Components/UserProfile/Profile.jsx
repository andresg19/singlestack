import React, { useState } from "react";
import { dateFormatter } from "../QA/Question";

const Profile = () => {
  const [user, setUset] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
      ? JSON.parse(localStorage.getItem("currentUser"))
      : []
  );
  console.log(user);

  const date = dateFormatter(user.createdAt);

  return (
    <div className="flex">
    <div className="justify-center  grid m-[10%] w-[20%] py-2  bg-[#1C1C1C] rounded-xl">
      <div className="m-[10%] ml-auto mr-auto text-white text-sm py-4 text-center">
        <img
          src="https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg"
          alt="not found"
          width={50}
          className="ml-auto mr-auto"
        />
        <h1>{user.fullname}</h1>
        <h3>{user.email}</h3>
      </div>
      <div className="m-[4%] ml-auto mr-auto py-4 text-white text-m text-center">
        <p>Ver mis preguntas</p>
        <p>Ver mis publicaciones</p>
      </div>
      <div className="m-[10%] ml-auto mr-auto py-4 text-[#0000FF] text-xs text-center">
       <p>Configurar perfil</p>
       <p>Cambiar contraseña</p>
      </div>
    </div>
    <div className="fle w-[100%] mr-[5%] max-h-[80vh] mt-[5%] bg-[#1C1C1C]  rounded-xl">
      <h1>soy el otro div</h1>
    </div>
    </div>
  );
};

export default Profile;
