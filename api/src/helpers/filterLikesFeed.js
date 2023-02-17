const { Feedlikes, Feedpost } = require("../db.js");

const filterLikesFeed = async (allPosts, allLikes) => {
  console.log('allPosts', allPosts);
  console.log('allLikes', allLikes);
  
  let resultCountLikes = [];

  for (let i = 0; i < allLikes.length; i++) {
    
    
    for (let r = 0; r < resultCountLikes.length; r++) {
      if (!resultCountLikes.length) {
        resultCountLikes.push({
          id: allLikes[i].postId,
          quantity: 1
        })
      }
      allLikes[i].postId === resultCountLikes[r].id && resultCountLikes.length ?
      resultCountLikes[r].quantity + 1 
      : 
      resultCountLikes.push({
        id: allLikes[i].postId,
        quantity: 1
      })  
    }
} 
console.log('resultcountlikes', resultCountLikes)
   return resultCountLikes;

}

module.exports = {
 filterLikesFeed,
};

    // else {
    //   resultCountLikes.forEach((r) => {
    //     if ( r.id === allLikes[i].postId ) {
    //       console.log('ELSE')
    //       return quantity + 1;
    //     }
    //   })
    // }
  
