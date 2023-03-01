import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPosts } from "../../Redux/Actions/Actions";

const Questions = ({ handleSearch }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());

  }, []);

  return (
    <div className="mt-[6%] ml-[10%] font-sans max-h-[90vh] overflow-scroll scrollbar-hide">
      {handleSearch.map((p) => {
        return (
          <div
            key={p.id}
            className="bg-black mr-[3%] mb-[10%] text-white shadow-[#191919] shadow-md"
          >
            <div className="flex justify-between italic">
              <div className="ml-2 ">
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
            <div className="ml-[20%]">
              {/* contenido */}
              <h5 className="mt-5 underline">{p.title}</h5>
            <br className="" />
              <h5 className="truncate mt-5">{p.content}</h5>
            </div>
            <div className="">
              <p className="underline text-blue-800 ml-[80%] mt-8">
                <Link to={"/question/" + p.id}>Saber mas...</Link>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Questions;
