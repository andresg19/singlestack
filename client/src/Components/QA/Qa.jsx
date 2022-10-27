import React from "react";
import Nav from "../NavBar/Nav";
import FeedQA from "./FeedQA";

const Qa = () => {
  return (
    <div className="containerQa">
      <div className="qaLeft text-center text-white">
        <h1>Explicacion:</h1>
        <h4>
          Independiente? Se fue a la .... Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ea ratione nulla minus provident vel non rem
          nesciunt enim eos quos, id reiciendis sequi officia voluptate sunt est
          nam tempore nihil!
        </h4>
      </div>
      <div className="qaRight">
        <FeedQA />
      </div>
    </div>
  );
};

export default Qa;
