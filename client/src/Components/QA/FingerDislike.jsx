import React from "react";
import dislike from "../../assets/imgs/likered.png";
import disred from "../../assets/imgs/likereedd.png";

const FingerDislike = ({ dislikes, comment, userId }) => {
  let likeFilter = dislikes.filter((l) => l.commentId === comment.id);
  let userLike = likeFilter.filter((l) => l.userId === userId);

  /*   useEffect(() => {
      
    }, []); */

  return (
    userLike.length ? 
      <img src={disred} alt="" className="w-12" />
      :
     <img src={dislike} alt="" className="w-12" />
  );
};

export default FingerDislike;
