import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPosts } from "../../Redux/Actions/Actions";

const Questions = ({ handleSearch }) => {
  const dispatch = useDispatch();
  const posteos = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className="mt-[6%] ml-[10%] text-xl max-h-[90vh] overflow-scroll scrollbar-hide">
      {handleSearch.map((p) => {
        return (
          <div
            key={p.id}
            className="bg-[#163250] mr-[3%] mb-[10%] text-white shadow-[#191919] shadow-lg"
          >
            <div className="flex justify-between">
              <div className="ml-2 mt-2 font-thin">
                {p.etiquetas?.map((e) => {
                  return `#${e} `;
                })}
              </div>
              <div className="flex mr-2 mt-2 font-bold">
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
              <h5>{p.title}</h5>
              <h5 className="truncate mr-2">{p.content}</h5>
            </div>
            <div className="">
              <p className="underline ml-[80%]">
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
