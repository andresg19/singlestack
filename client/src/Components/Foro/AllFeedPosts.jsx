import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { feedDislikes, feedLikes, getFeedPosts } from "../../Redux/Actions/Actions";
import userWhite from "../../assets/imgs/userWhite.png";
import bookmark from "../../assets/imgs/bookmark.png";
import { dateFormatter } from "../QA/Question";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import fingerSVG from "../../assets/imgs/fingerSVG.svg";
import commentSVG from "../../assets/imgs/comment.svg";
import FeedPost from "./FeedPost";

const AllFeedPosts = () => {
  const dispatch = useDispatch();
  const feedPosts = useSelector((state) => state.feedPosts);
  const likes = useSelector((state) => state.feedlikes);
  const actualUser = JSON.parse(localStorage.getItem("currentUser")).id;
  const dislikes = useSelector((state) => state.feeddislikes);

  useEffect(() => {
    dispatch(getFeedPosts());
    dispatch(feedLikes());
    dispatch(feedDislikes());
  }, []);


  

  return (
    //div padre
    <div className="mt-10  w-[90%] ml-auto mr-auto">
      {feedPosts.length
        ? feedPosts.map((post) => (
    
            <div className="pt-4 mx-8 rounded-xl">
              <div className="pt-5 shadow-md bg-[#0f1629ac] shadow-[#0f0f0fbd]">
                <div className="flex justify-between mb-2 mx-2 text-black">
                  <div className="flex -mt-2">
                    <img src={userWhite} alt="" className="w-10 h-10  ml-2" />
                    <div className="ml-2 t-mt-2">
                      <p className="text-xl  text-gray-300">{post.author}</p>
                      <p className="text-gray-400">
                        {dateFormatter(post.createdAt)}
                      </p>
                    </div>
                  </div>
                  <img src={bookmark} alt="" className="w-6 h-6" />
                </div>

                <div className="m-5 p-4 ">
                  <p className="flex justify-center text-2xl text-gray-300">
                    {post.content}
                  </p>

                  <div className="flex justify-evenly p-4">
                    {post.img?.map((postimg) => (
                      <img src={postimg} alt="" />
                    ))}
                    <p className="underline ml-[80%]">
                      <Link to={"/feedpost/" + post.id}>Saber mas...</Link>
                    </p>
                  </div>
                </div>
              
                <div className=" flex shadow-md shadow-[#0f0f0fbd] mx-10 py-2 justify-around">
            <h2 className="text-green-600">
              {post.likes}
              <img
                src={fingerSVG}
                alt=""
                className="w-8"
              />
            </h2>
            <h2 className="text-sm mr-1 text-white">
               {post.comments}
              <img
                src={commentSVG}
                alt=""
                className="w-8 rotate-180"
              />
            </h2>
          </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default AllFeedPosts;
