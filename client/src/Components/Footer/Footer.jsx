import React from "react";
import linkedin from "../../assets/imgs/linkedin.png";

const Footer = () => {
  return (
    <footer class="flex w-full  shadow-lg text-slate-200 font-sans  shadow-black mt-8  bg-[#000000e7] justify-between">
      <h1
      className="text-3xl h-10 italic mt-5 ml-5"
      >singlestack</h1>
      <div className="inline-flex ml-4 mt-[10%]  ml-[15%] h-[10vh] cursor-pointer">
        <div className="flex text-xl font-light">
          <img src={linkedin} alt="" className="w-12 h-12  mt-5" />
          <a href="https://www.linkedin.com/in/andres-germain-dev/" className=" mt-5 underline text-blue-600 p-2">Andrés Germain</a>
        </div>
        <div className="flex text-xl font-light">
          <img src={linkedin} alt="" className="w-12 h-12  mt-5" />
          <a href="https://www.linkedin.com/in/valentinomartz/" className=" mt-5 underline text-blue-600 p-2">Valentino Martinez</a>
        </div>
      </div>
      <div className="mr-4 mt-[3.5%]">
        <div className=" mr-[40vh] mt-[8vh]">
          <h3 className="text-center text-semibold text-2xl">CONTACTO</h3>
        </div>
        <div className="ml-[20vh] -mt-[20%] ">
          <div className="">
            <input
              type="text"
              placeholder="mail address"
              className="text-center w-full placeholder:text-center shadow-md shadow-black box-shadow rounded-b-lg bg-[#191919] opacity-75 outline-0"
            />
          </div>
          <div className="mt-2">
            <textarea
              name=""
              id=""
              cols="30"
              rows="4"
              placeholder="insert your message"
              className="w-full  bg-[#191919] placeholder:italic opacity-75 shadow-md shadow-black box-shadow  rounded-b-lg outline-0"
            ></textarea>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
