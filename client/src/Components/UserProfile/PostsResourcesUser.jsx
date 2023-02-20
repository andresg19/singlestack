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
            <div className="bg-[#15273f] ml-auto mr-auto m-2 w-[90%] text-white rounded-[2%]">
              <div className="text-m text-center">
                <h1
                className="mt-3"
                >
                  {p.title}
                  </h1>
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
                      className="w-[15%] ml-auto mr-auto mt-[2%]" 
                      />;
                    })
                  : null}
              </div>
  
              <div className="grid mt-[2%] ml-auto w-[25%]">
                <p>{p.date}</p>
                <p>
                  <Link to={ "/feedpost/" + p.id } >
                  Ver posteo
                  </Link>
                </p>
              </div> 
            </div>
          );
        })}
      </div>
     );
}
 
export default PostsResourcesUser;