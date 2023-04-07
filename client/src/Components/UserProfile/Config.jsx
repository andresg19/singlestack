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
      <div className='ml-auto mr-auto w-[80%] text-slate-200'>
        <input 
        type="text"
        name="fullname"
        className='text-center block w-60 p-2 mx-auto mt-5 bg-[#191919] rounded-md lg:text-xs lg:mt-[15%]'
        placeholder='Nombre de Usuario' 
        value={input.fullname}
        onChange={(e) => {setInput({...input, [e.target.name]: e.target.value})}} />
         <input 
        type="password"
        name="password"
        className='text-center block w-60 p-2 mx-auto mt-5 bg-[#191919] rounded-md lg:text-xs '
        placeholder='Contraseña' 
        value={input.password}
        onChange={(e) => {setInput({...input, [e.target.name]: e.target.value})}} />
        <div class="flex justify-center items-center w-[60%] mx-auto mt-10">
          <label
            for="dropzone-file"
            class="flex flex-col justify-center items-center w-60 h-40 bg-[#191919] shadow-md shadow-[#191919f6] rounded-md lg:w-40 lg:h-30"
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
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400 lg:text-xs">
                <span class="font-semibold">Cambiar imágen de perfil</span>
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400 lg:text-xs">
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
        <div className="flex mt-10 mx-auto w-50 lg:mt-5">
        {img ?
          <img src={img} alt="" width={80} className="box-shadow mx-auto shadow-black shadow-md" /> 
        : 
        <span className="ml-100 mx-auto lg:text-xs">No hay imágen</span>
        }
        </div>
        <button
          className="flex p-1 text-sm mt-[8%] font-medium rounded mx-auto hover:bg-black bg-[#191919] shadow-lg shadow-[#19191980] w-[25%] lg:text-xs"
          onClick={handlePut}
        >
          Guardar cambios
        </button>

        </div>
    );
}
 
export default Config;