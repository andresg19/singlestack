import React from "react";
import dislike from "../../assets/imgs/likered.png";
import disred from "../../assets/imgs/likereedd.png";

const FingerDislikesForo = ({ dislikes,  userId }) => {
  let result = dislikes.filter((d) => d.userId === userId)
  console.log(result)

  /*   useEffect(() => {
      
    }, []); */

  return (
result.length ? 
      <img src={disred} alt="" className="w-12" />
      :
     <img src={dislike} alt="" className="w-12" />
  );
};

export default FingerDislikesForo;
