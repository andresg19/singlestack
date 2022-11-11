import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { searchPost, clearState, getPosts } from "../../Redux/Actions/Actions";
import InputComment from "./InputComment";

export function dateFormatter(state) {
  //date "2022-10-26T13:25:39.855Z"
  //dateFromRedux.toString();

  if (state && typeof state === "string") {
    let cutter = state.split("T");
    let dateSplit = cutter[0].split("-");
    let dateJoin = `${dateSplit[2]} ${dateSplit[1]} ${dateSplit[0]}`;
    let hourSplit = cutter[1].split(".")[0];

    return `${hourSplit.substring(0, 5)} - ${dateJoin}`;
  }
  //let cutter = dateFromRedux.split(":");
  return "Error en la fecha/hora del post";
}

const Question = (/* id */) => {
  const dispatch = useDispatch();
  const currentPost = useSelector((state) => state.postDetail);
  const currentComments = useSelector((state) => state.commentsDetail);
  console.log("soycurrentPost", currentPost);
  const { id } = useParams();
  const postId = currentPost.id;


  useEffect(() => {
    dispatch(searchPost(id));
    return () => {
      dispatch(clearState());
    };
  }, []);

  // function blobToBase64(blob) {
  //   return new Promise((resolve, _) => {
  //     const reader = new FileReader();
  //     reader.onloadend = () => resolve(reader.result);
  //     reader.readAsDataURL(blob);
  //   });
  // }

  
  return (
    <div className="">
      <div className="">
        <p>{dateFormatter(currentPost.createdAt)}</p>

        <p>User: {currentPost.author}</p>
        <h1>{currentPost.title}</h1>
        <p>{currentPost.content}</p>
        <p>{currentPost.etiquetas + ""}</p>
        <p>{dateFormatter(currentPost.date)}</p>
        
        {  
          
                  currentPost.img?.map((i) => {
                   return (
                    <img src={i} alt="img not found" width={50} />
                   )
                  })
        } 
        
            
      </div>
      <div className="">
        <div className="">
          <h2>Comentarios</h2>
          {currentComments &&
            currentComments.map((e) => {
              console.log("soy e comments", e);

              return (
                <div key={e.id}>
                  <p>{dateFormatter(e.createdAt)}</p>
                  <p>{e.author}</p>
                  <p>{e.content}</p>
                {  
                  e && e.img.map((i) => {
                   return (
                    <img src={i} alt="img not found" width={50} />
                   )
                  })
                } 
                  <hr />
                </div>
              );
            })}
          <InputComment postId={postId} />
        </div>
      </div>
    </div>
  );
};

export default Question;
