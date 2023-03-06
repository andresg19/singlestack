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
    <div className="mt-[6%] ml-[10%] font-sans max-h-[90vh] overflow-y-auto">
      {handleSearch.map((p) => {
        return (
          <div
            key={p.id}
            className="bg-black mr-[3%] mb-[10%] text-slate-200 shadow-[#19191958] shadow-md"
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

              <h5 className="truncate mt-5">{p.content}</h5>
            </div>
            <div className="">
              <button className="bg-[#070a13] rounded-sm shadow-md shadow-[#000000] hover:bg-[#030509] font-semibold text-[#181cff70] ml-[80%] mt-8">
                <Link to={"/question/" + p.id}>Ver más...</Link>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Questions;
