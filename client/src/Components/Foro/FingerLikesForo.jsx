import React from "react";
import like from "../../assets/imgs/like.png"
import dislike from "../../assets/imgs/likegreen.png"

const FingerLikesForo = ({ likes, userId }) => {
    let result = likes.filter((d) => d.userId === userId)

  /*   useEffect(() => {
    
  }, []); */

  return (
   result.length ? 
    <img src={dislike}alt="" className="w-12 lg:w-10" />
    :
   <img src={like} alt="" className="w-12 lg:w-10" />
    );
};

export default FingerLikesForo;
