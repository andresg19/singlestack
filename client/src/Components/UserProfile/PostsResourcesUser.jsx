import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getFeedPosts } from '../../Redux/Actions/Actions';


const PostsResourcesUser = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.feedPosts)
    const currentUser = JSON.parse(localStorage.getItem("currentUser")).fullname;
    let resultUserPosts = posts.filter((p) => p.author === currentUser)
    console.log(posts)


    useEffect(() => {
       dispatch(getFeedPosts())
    }, [])
    return ( 
        <div className="">
        {resultUserPosts.map((p) => {
          return (
            <div className="bg-[#1313136d] ml-auto mr-auto mt-5 w-[90%] text-white rounded-[2%]">
              <div className="text-sm text-center">
                <p
                className="mt-3"
                >
                  {p.content}
                  </p>
              </div>
  
              <div>
                {p.img
                  ? p.img.map((i) => {
                      return <img src={i} alt="not found" 
                      className="w-[80%] ml-auto mr-auto mt-[5%]" 
                      />;
                    })
                  : null}
              </div>
  
            
                <p className="bg-[#070a13] rounded-sm shadow-md shadow-[#000000] mt-5 ml-auto hover:bg-[#030509]  w-[30%] font-semibold text-[#181cff70]">
                  <Link to={ "/feedpost/" + p.id } >
                  Ver posteo
                  </Link>
                </p>
  
            </div>
          );
        })}
      </div>
     );
}
 
export default PostsResourcesUser;