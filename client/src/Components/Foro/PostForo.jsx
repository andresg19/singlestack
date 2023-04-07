import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postFeedPosts } from "../../Redux/Actions/Actions";

const PostsForo = () => {
  const dispatch = useDispatch();
  const actualUser = JSON.parse(localStorage.getItem("currentUser")).fullname;
  const [input, setInput] = useState({
    content: "",
    author: actualUser,
    img: "",
  });
  const [img, setImg] = useState("");
  const [imgArr, setImgArr] = useState([]);

  useEffect(() => {
    if (img !== "") {
      setImgArr([...imgArr, img]);
    }
    console.log(imgArr);
  }, [img]);

  const handlePost = (e) => {
    e.preventDefault();
    input.img = imgArr;
    dispatch(postFeedPosts(input));
    window.location.reload();
  };

  const handleImage = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImg(readerEvent.target.result);
    };
  };

  return (
    <div className="text-slate-200 font-sans text-lg font-light">
      <div className="sm:grid">
      <textarea
        className=" shadow-lg bg-[#0a0b0e] rounded-md  shadow-[#1919191c] rounded-b-lg sm:mx-auto lg:text-sm"
        rows="5"
        cols="30"
        name="content"
        placeholder="Contenido"
        value={input.content}
        onChange={(e) => {
          setInput({ ...input, [e.target.name]: e.target.value });
        }}
      />

      </div>

      <div class="flex justify-center items-center mt-5 w-[100%] mx-auto lg:w-[30%] ">
        <label
          for="dropzone-file"
          class="flex flex-col justify-center items-center w-[80%] h-54 rounded-lg shadow-sm shadow-black box-shadow hover:bg-black cursor-pointer bg-[#0a0b0e]"
        >
          <div class="flex flex-col justify-center items-center pt-5 pb-6">
            <svg
              aria-hidden="true"
              class="mb-3 w-10 h-10 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold ml-4">Subir una imágen</span>
              <br />
              <span className="font-light">(Cargar de a una imágen)</span>
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            class="hidden"
            multiple
            onChange={handleImage}
          />
        </label>
      </div>
     
     
      <div className="flex justify-around mt-4">
      {imgArr?.map((i) => {
          return <img src={i} alt="" className="w-32" />;
        })}
      
      </div>

      <div className="flex justify-center mt-4 mb-2">
      <button
        className="bg-[#070a13] hover:bg-[#030509] w-[16%] rounded-sm shadow-md shadow-[#000000] font-semibold text-[#ababae] text-sm ml-[1%] mt-8 lg:mt-0"
        onClick={handlePost}
      >
        Postear
      </button>
      </div>


    </div>
  );
};

export default PostsForo;
