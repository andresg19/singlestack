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
          <div className="bg-[#191919] ml-auto mr-auto font-sans m-2 w-[90%] text-white rounded-[2%]">
            <div className="text-m text-center">
              <h1
              className="mt-3 underline"
              >
                {q.title}
                </h1>
              <p
              className="mt-3"
              >
                {q.content}
                </p>
            </div>

            <div>
              {q.img
                ? q.img.map((i) => {
                    return <img src={i} alt="not found" 
                    className="w-[15%] ml-auto mr-auto mt-[2%]" 
                    />;
                  })
                : null}
            </div>

            <div className="grid mt-[2%] ml-[85%] w-[25%]">
              <p className="bg-[#070a13] rounded-sm shadow-md shadow-[#000000] hover:bg-[#030509]  w-[48%] font-semibold text-[#181cff70]">
                <Link to={"/question/" + q.id} >
                Ver pregunta
                </Link>
              </p>
            </div> 
          </div>
        );
      })}
    </div>
  );
};

export default QuestionsUsers;
