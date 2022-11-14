import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postComment } from "../../Redux/Actions/Actions";

const InputComment = ({ postId }) => {
  const dispatch = useDispatch();
  const fullComment = {
    postId: postId,
    author: JSON.parse(localStorage.getItem("currentUser")).fullname,
  };
  const [input, setInput] = useState("");
  const [img, setImg] = useState("");
  const [imgArr, setImgArr] = useState([]);

  useEffect(() => {
    if (img !== "") {
      setImgArr([...imgArr, img]);
    }
    console.log(imgArr);
  }, [img]);

  const handleImage = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImg(readerEvent.target.result);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(img);
    fullComment.content = input;
    fullComment.img = imgArr;
    console.log(fullComment);
    dispatch(postComment(fullComment));
    window.location.reload();
  };

  return (
    <div className="justify-center">
      <div className="flex">
        <textarea
          name=""
          id=""
          rows="10"
          cols="80"
          value={input.content}
          placeholder="Escribe tu respuesta, cambia el mundo 😏"
          className="shadow-lg bg-[#aaabac5b] shadow-[#1919191c] rounded-b-lg outline-none mx-auto"
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
      </div>

      <div class="flex justify-center items-center w-[60%] ml-auto mr-auto mt-4">
        <label
          for="dropzone-file"
          class="flex flex-col justify-center items-center w-60 h-36 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
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
            <p class="mb-2 text-sm text-center text-gray-500 dark:text-gray-400">
              <span class="font-semibold">
                Click para cargar tu captura del código
              </span>
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
          onClick={handleSubmit}
          className="bg-[#46899B] rounded-md p-2 h-10 hover:bg-[#2B4046] hover:text-white hover:border-white hover:border"
        >
          Responder
        </button>
      </div>
    </div>
  );
};

export default InputComment;
