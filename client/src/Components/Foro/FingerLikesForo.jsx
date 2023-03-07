import React from "react";
import like from "../../assets/imgs/likepng.png";
import likegreen from "../../assets/imgs/likegreen.png";

const FingerLikesForo = ({ likes, userId }) => {
    let result = likes.filter((d) => d.userId === userId)

  /*   useEffect(() => {
    
  }, []); */

  return (
   result.length ? 
    <img src={likegreen} alt="" className="w-12" />
    :
   <img src={like} alt="" className="w-12" />
    );
};

export default FingerLikesForo;
