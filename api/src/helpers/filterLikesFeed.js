const { Feedlikes, Feedpost } = require("../db.js");

const filterLikesFeed = async (allPosts, allLikes) => {
  console.log('allPosts', allPosts);
  console.log('allLikes', allLikes);

  let resultCountLikes = [];
  
  for (let i = 0; i < allLikes.length; i++) {
    if (!resultCountLikes.length) {
      resultCountLikes.push({
        id: allLikes[i].postId,
        quantity: 1
      })

    } else {

      resultCountLikes.forEach((r) => {
        console.log('FOREACH')
        if (r.id !== allLikes[i].postId) {
          console.log('IF')
          resultCountLikes.push({
            id: allLikes[i].postId,
            quantity: 1
          })

      } else {

        console.log('ELSE IF')
        return r.quantity += 1;
      }
      }) 

    }
  }
  console.log('resultcountlikes', resultCountLikes)
  return resultCountLikes;
};

    // else {
    //   resultCountLikes.forEach((r) => {
    //     if ( r.id === allLikes[i].postId ) {
    //       console.log('ELSE')
    //       return quantity + 1;
    //     }
    //   })
    // }
  

module.exports = {
 filterLikesFeed,
};
