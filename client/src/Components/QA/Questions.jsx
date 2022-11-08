import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPosts } from "../../Redux/Actions/Actions";

const Questions = () => {
  const dispatch = useDispatch();
  const posteos = useSelector((state) => state.posts);
  console.log(posteos);
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className="">
      {posteos.map((p) => {
        return (
          <div key={p.id}>
            <h1 className="">
              <Link to={"/question/" + p.id}>{p.title}</Link>
            </h1>
            {/* <p>{p.content}</p> */}
          </div>
        );
      })}
    </div>
  );
};

export default Questions;
