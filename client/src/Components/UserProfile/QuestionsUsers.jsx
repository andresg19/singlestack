import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../Redux/Actions/Actions";
import { Link } from "react-router-dom";

const QuestionsUsers = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const currentUser = JSON.parse(localStorage.getItem("currentUser")).fullname;
  console.log("soyCurrentUser", currentUser);
  console.log("soy posts", posts);

  

  const resultQuestionsUser = [];
  console.log(resultQuestionsUser);
  let postsCurrentUser = posts.forEach((post) => {
    console.log(post.author);
    if (post.author === currentUser) {
      resultQuestionsUser.push(post);
    }
  });

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className="">
      {resultQuestionsUser.map((q) => {
        return (
          <div className="bg-[#080808] ml-auto mr-auto font-sans m-2 w-[90%] text-white rounded-[2%] lg:grid lg:w-[100%] lg:mx-auto">
            <div className="text-center">
              <h1
              className="mt-5 text-md underline"
              >
                {q.title}
                </h1>
              <p
              className="mt-3 text-sm lg:text-xs"
              >
                {q.content}
                </p>
            </div>

            <div>
              {q.img
                ? q.img.map((i) => {
                    return <img src={i} alt="not found" 
                    className="w-[80%] ml-auto mr-auto mt-[2%] lg:w-[50%]" 
                    />;
                  })
                : null}
            </div>

            
              <p className="bg-[#070a13] rounded-sm shadow-md shadow-[#000000] mt-5 ml-auto hover:bg-[#030509]  w-[30%] font-semibold text-[#181cff70] lg:w-[20%] lg:text-sm">
                <Link to={"/question/" + q.id} >
                Ver pregunta
                </Link>
              </p>
            
          </div>
        );
      })}
    </div>
  );
};

export default QuestionsUsers;
