import React from "react";
import linkedin from "../../assets/imgs/linkedin.png";

const Footer = () => {
  return (
    <footer class="flex w-full mt-8 h-40 bg-[#000000] justify-between">
      <div className="ml-4">
        <div className=" text-3xl">
          <h2 className="text-white mt-4">singlestack co</h2>
          <img src={linkedin} alt="" className="w-12 h-12 mt-8" />
        </div>
      </div>
      <div className="mr-4">
        <div className=" mr-[40vh] mt-[8vh]">
          <h3 className="text-center text-3xl">CONTACT</h3>
        </div>
        <div className="ml-[20vh] -mt-[20%] ">
          <div className="">
            <input
              type="text"
              placeholder="mail address"
              className="text-center w-full bg-gray-300 bg-opacity-5 outline-0"
            />
          </div>
          <div className="mt-2">
            <textarea
              name=""
              id=""
              cols="30"
              rows="4"
              placeholder="insert your message"
              className="w-full bg-gray-300 bg-opacity-5 outline-0"
            ></textarea>
          </div>
        </div>
        {/* <input type="text" placeholder="mail adress" className="mb-60" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="4"
          placeholder="insert your message"
        ></textarea> */}
      </div>
    </footer>
  );
};

export default Footer;
