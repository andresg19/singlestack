import React from "react";
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
  const [img, setImg] =  useState("");
  // console.log('soy la img', img)


//   function base64toBlob(base64Data, contentType) {
//     contentType = contentType || '';
//     var sliceSize = 1024;
//     var byteCharacters = atob(base64Data);
//     var bytesLength = byteCharacters.length;
//     var slicesCount = Math.ceil(bytesLength / sliceSize);
//     var byteArrays = new Array(slicesCount);

//     for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
//         var begin = sliceIndex * sliceSize;
//         var end = Math.min(begin + sliceSize, bytesLength);

//         var bytes = new Array(end - begin);
//         for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
//             bytes[i] = byteCharacters[offset].charCodeAt(0);
//         }
//         byteArrays[sliceIndex] = new Uint8Array(bytes);
//     }
//     return new Blob(byteArrays, { type: contentType });
// }


  const handleImage = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setImg({
        data: URL.createObjectURL(e.target.files[0])
      });
  }
}

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('30', fullComment)
    fullComment.content = input;
    // console.log('31', fullComment)
    fullComment.img = img.data;
    dispatch(postComment(fullComment));
    window.location.reload();
  };
  return (
    <div className="inputComment">
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        value={input.content}
        placeholder="Escribe tu respuesta, cambia el mundo 😏"
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
        <input 
        type="file"
        onChange={handleImage}
        // value={img}
        />
       {
        img ? 
         <img src={img.data} alt="" width={25} />
         :
         <p>No hay imagen</p>

       } 
      <button onClick={handleSubmit}>Responder</button>
    </div>
  );
}; 


export default InputComment;
