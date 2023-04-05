import React from "react";
import dislikereed from "../../assets/imgs/likereedd.png"
import dislike from "../../assets/imgs/dislike.png"


const FingerDislikesForo = ({ dislikes,  userId }) => {
  let result = dislikes.filter((d) => d.userId === userId)
  console.log(result)

  /*   useEffect(() => {
      
    }, []); */

  return (
result.length ? 
      <img src={dislikereed} alt="" className="w-12" />
      :
     <img src={dislike} alt="" className="w-12 " />
  );
};

export default FingerDislikesForo;
