import React from "react";
import like from "../../assets/imgs/dislike.png"
import likegreen from "../../assets/imgs/likereedd.png"
const FingerDislike = ({ dislikes, comment, userId }) => {
  let likeFilter = dislikes.filter((l) => l.commentId === comment.id);
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

export default FingerDislike;
