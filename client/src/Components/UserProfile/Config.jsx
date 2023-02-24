import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, putProfile } from '../../Redux/Actions/Actions';


const Config = () => {
    const dispatch = useDispatch();
    const actualUser = JSON.parse(localStorage.getItem("currentUser"));
    const [input, setInput] = useState({
      id: actualUser.id,
        fullname: actualUser.fullname,
        email: actualUser.email,
        img: "",
        password: actualUser.password,
        dislikeId: actualUser.dislikeId,
        likeId: actualUser.likeId

    })
    const [img, setImg] = useState("");
    console.log(img)
    const [imgArr, setImgArr] = useState([]);

    useEffect(() => {
        if (img !== "") {
          setImgArr([...imgArr, img]);
        }
        console.log(imgArr);
        dispatch(getUsers());
      }, [img]);
    
      const handlePut = (e) => {
        e.preventDefault();
        input.img = imgArr;
        dispatch(putProfile(input));
        localStorage.setItem("currentUser", JSON.stringify(input));
        window.location.reload()

       
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
      <div>
        <input 
        type="text"
        name="fullname"
        placeholder='Nombre de Usuario' 
        value={input.fullname}
        onChange={(e) => {setInput({...input, [e.target.name]: e.target.value})}} />
         <input 
        type="password"
        name="password"
        placeholder='Contraseña' 
        value={input.password}
        onChange={(e) => {setInput({...input, [e.target.name]: e.target.value})}} />
        <div class="flex justify-center items-center w-[60%] mx-auto">
          <label
            for="dropzone-file"
            class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
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
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span class="font-semibold">Subir una imagen</span>
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
        {img ? <img src={img} alt="" width={25} /> : <p>No hay imagen</p>}

        <button
          className="text-sm bg-[#aaabac5b] shadow-lg shadow-[#19191980] w-[30%] mx-auto"
          onClick={handlePut}
        >
          Postear
        </button>
      </div>
    );
}
 
export default Config;