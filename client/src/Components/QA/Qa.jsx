import React from "react";
import Nav from "../NavBar/Nav";
import FeedQA from "./FeedQA";

const Qa = () => {
  return (
    <div className="">
      <Nav />
      <div className="flex ">
        <div className="border  ml-40">
          PRIMER DIV
          <input type="text" placeholder="busca tu duda" className="flex" />
          <div className="">
            <h3>#Etiquetas</h3>
            <div className="ml-8">
              <p className="bg-slate-400 mt-2">#javascript</p>
              <p className="bg-slate-400 mt-2">#nodejs</p>
              <p className="bg-slate-400 mt-2">#python</p>
            </div>
            <hr className="mt-2" />
          </div>
          <div className="">
            <h3>#Preguntas</h3>
            <div className="ml-8">
              <p className="bg-slate-400 mt-2">Trending de la semana</p>
              <p className="bg-slate-400 mt-2">Mas recientes</p>
              <p className="bg-slate-400 mt-2">Que podrian interesarte</p>
            </div>
          </div>
        </div>
        <div className="border  ml-40">SEGUNDO DIV</div>
      </div>
    </div>
  );
};

export default Qa;
