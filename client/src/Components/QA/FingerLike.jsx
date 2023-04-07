import React from "react";
import like from "../../assets/imgs/like.png";
import likegreen from "../../assets/imgs/likegreen.png";


const FingerLike = ({ likes, comment, userId }) => {
  let likeFilter = likes.filter((l) => l.commentId === comment.id);
  let userLike = likeFilter.filter((l) => l.userId === userId);

  /*   useEffect(() => {
    
  }, []); */

  return (
    
      userLike.length ? 
      <img src={likegreen} alt="" className="w-[70%]" />
      :
     <img src={like} alt="" className="w-[70%]" />
  );
};

export default FingerLike;
