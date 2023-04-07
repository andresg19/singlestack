import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { getPosts } from "../../Redux/Actions/Actions";

const Questions = ({ handleSearch }) => {
  const dispatch = useDispatch();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  useEffect(() => {
    dispatch(getPosts());

  }, []);


  const handleUserControll = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: 'warning',
      text: 'Debe iniciar sesión para ver las preguntas'
    })
  }

  return (
    <div className="max-h-[75vh] overflow-auto">
      {handleSearch.map((p) => {
        return (
          <div
            key={p.id}
            className="text-white text-sm py-5 text-center shadow-sm shadow-[#2b5d6641] mt-[10%] bg-[#19191923]"
          >
            <div className="flex justify-between italic">
              <div className="ml-2 text-[#46899B] font-black">
                {p.etiquetas?.map((e) => {
                  return `#${e} `;
                })}
              </div>
              <div className="flex mr-2 font-medium ">
                {p.author}

                <img
                  src="./imgs/user.png"
                  alt=""
                  className="w-8 inline-flex ml-2"
                />
              </div>
            </div>
            <div className="ml-[10%]">
              {/* contenido */}
              <h5 className="mt-5 underline">{p.title}</h5>

              <h5 className="truncate mt-5">{p.content}</h5>
            </div>
            <div className="">
            {currentUser ?
              <button className="flex hover:text-blue-600 text-sm h-8 text-white font-semibold py-2 px-4 ml-auto rounded shadow">
                <Link to={"/question/" + p.id}>Ver más...</Link>
              </button>
              :
              <button className="flex text-sm h-8 text-white font-semibold py-2 px-4 ml-auto rounded shadow"
              onClick={handleUserControll}>
               Ver más...
            </button>
              }
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Questions;
