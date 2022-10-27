import React from "react";
import Nav from "../NavBar/Nav";
import FeedQA from "./FeedQA";

const Qa = () => {
  return (
    <div className="containerQa">
      <div className="qaLeft text-center text-white">
        <h1>Explicacion:</h1>
        <h4>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
          provident vitae placeat odio sit earum commodi vel. Nostrum, vero
          libero! Voluptatibus harum soluta mollitia dicta libero repudiandae
          quos, incidunt consequuntur?
        </h4>
      </div>
      <div className="qaRight">
        <FeedQA />
      </div>
    </div>
  );
};

export default Qa;
