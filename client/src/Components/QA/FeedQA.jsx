import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../Redux/Actions/Actions";
import Questions from "./Questions";
import Modal from "./Modal";

const FeedQA = () => {
  const dispatch = useDispatch();
  // const posteos = useSelector((state) => state.posts);
  // console.log(posteos)

  // useEffect(() => {
  //     dispatch(getPosts())
  // }, [])

  const [modal, setModal] = useState(false);

  const modalOpen = () => {
    setModal(true);
    console.log("open");
  };
  const modalClose = () => {
    setModal(false);
    console.log("close");
  };

  return (
    <div className="containerFeedQA">
      <div className="">
        {modal ? (
          <div className="">
            <Modal />
            <button onClick={modalClose}>Cerrar ventana</button>
          </div>
        ) : (
          <div className="">
            <button className="" onClick={modalOpen}>
              Crear nuevo post
            </button>
            <Questions />
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedQA;
