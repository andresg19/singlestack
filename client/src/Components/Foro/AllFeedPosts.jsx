import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { feedDislikes, feedLikes, getFeedPosts, getUsers } from "../../Redux/Actions/Actions";
import likegreen from "../../assets/imgs/likegreen.png"
import comments from "../../assets/imgs/comment.png"
import { dateFormatter } from "../QA/Question";
import { useParams } from "react-router";
import { Link } from "react-router-dom";



import FeedPost from "./FeedPost";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

const AllFeedPosts = () => {
  const dispatch = useDispatch();
  const feedPosts = useSelector((state) => state.feedPosts);
  const users = useSelector((state) => state.users);
  console.log(users)
  console.log(feedPosts);
  const likes = useSelector((state) => state.feedlikes);
  const actualUser = JSON.parse(localStorage.getItem("currentUser")).id;
  const dislikes = useSelector((state) => state.feeddislikes);

  useEffect(() => {
    dispatch(getFeedPosts());
    dispatch(feedLikes());
    dispatch(feedDislikes());
    dispatch(getUsers());
  }, []);


  const [model, setModel] = useState(false);
  const [imgSrc, setImgSrc] = useState("");

  const getImg = (img) => {
    setImgSrc(img);
    setModel(true);
  };
  

  return (
    //div padre
    <div className="mt-10  w-[100%] font-light font-sans">
      {feedPosts.length
        ? feedPosts.map((post) => (
    
            <div className="pt-4 mx-8 rounded-xl">
              <div className="pt-5 shadow-md shadow-[#0f0f0fbd]">
                <div className="flex justify-between mb-2 mx-2">
                  <div className="flex -mt-2">
                  
                    {
                      users.map(element => {
                        const imgUser = []
                        console.log(imgUser)
                        if(element.fullname === post.author) {
                          imgUser.push(element.img)
                          return(
                            <img src={imgUser[0]} alt="" className="w-10 h-10  ml-2" />
                          )
                        }
                      })
                    }
                    <div className="ml-2 t-mt-2">
                      <p className="text-xl underline text-gray-300">{post.author}</p>
                      <p className="text-gray-400">
                        {dateFormatter(post.createdAt)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="block w-[100%] m-5 p-4 ">
                  <span className="flex truncate justify-center text-lg text-slate-200">
                    {post.content}
                  </span>
              <hr className="mt-5 max-w-[100%] mx-auto border-[#ffffff08]" />
              <div className="block mt-[10%]">

                  {
              post.img.length ? 
              <div className="text-white italic mx-auto w-[20%]">
                <span >Este posteo contiene archivos</span>
              </div>  :
              <div  className="text-white italic mx-auto w-[20%]">
                <span>No contiene archivos</span>
              </div>

              
             }
             
                    {/* {post.img?.map((postimg, index) => (
                     <div
                     className="w-[100%] mt-5 ml-auto mr-auto"
                     key={index}
                   >
                     <TransformWrapper
                       defaultScale={1}
                       defaultPositionX={100}
                       defaultPositionY={200}
                     >
                     
                           <TransformComponent>
                             <img
                               src={postimg}
                               alt="img not found"
                               className="w-[80%] mx-auto cursor-pointer rounded-[8px]  shadow-md shadow-[#131313]"
                             />
                           </TransformComponent>
 
                 
                     </TransformWrapper>
                   </div>
                    ))} */}
                    <p className="underline text-[#000ac7] ml-[80%]">
                      <Link to={"/feedpost/" + post.id}>Saber más...</Link>
                    </p>
                  </div>
                </div>
              <div className=" flex shadow-md shadow-[#0f0f0fbd] mx-10 py-2 justify-around">
           <div>
            <h2 className="text-green-600 ml-3">
              {post.likes}
              </h2>
              <img
                src={likegreen}
                alt=""
                className="w-8 mt-1"
              />

           </div>
           <div>

            <h2 className="text-sm ml-3 text-white">
               {post.comments}
               </h2>
              <img
                src={comments}
                alt=""
                className="w-8 rotate-180 mt-1"
              />
           </div>
          </div>
              </div>
              <hr className="mt-10 max-w-[100%] mx-auto border-[#ffffff21]" />
            </div>
          ))
          : null}
          
          
    </div>
  );
};

export default AllFeedPosts;
