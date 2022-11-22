import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../Redux/Actions/Actions";
import Questions from "./Questions";
import AskQuestion from "./AskQuestion";

const FeedQA = () => {
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);

  const modalOpen = () => {
    setModal(true);
    console.log("open");
  };
  const modalClose = () => {
    setModal(false);
    console.log("close");
  };

  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  // console.log("fullname", currentUser.fullname);

  return (
    <div className="">
      <div className="">
        {modal ? (
          <div className="">
            <AskQuestion fullname={currentUser.fullname} />
            <button onClick={modalClose}>Cerrar ventana</button>
          </div>
        ) : (
          <div className="">
            <button className="" onClick={modalOpen}>
              Crear nuevo post
            </button>
            {/* <Questions /> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedQA;

//how to update model route in express node and postgres
