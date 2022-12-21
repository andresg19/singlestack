const { Feedlikes, Feedpost } = require("../db.js");

const filterLikesFeed = async (allPosts, allLikes) => {
  console.log("allPosts", allPosts);
  console.log("allLikes", allLikes);

  let resultCountLikes = [];

  let idCopy = [];
  for (let i = 0; i < allLikes.length; i++) {
    if (!resultCountLikes.length) {
      resultCountLikes.push({
        id: allLikes[i].postId,
        quantity: 1,
      });
      idCopy.push(allLikes[i].postId);
    } else {
      resultCountLikes.forEach((r) => {
        /* 
        if (!idCopy.includes(r.id)) { */
        console.log("CONDICION", r.id, allLikes[i].postId);
        if (r.id !== allLikes[i].postId) {
          resultCountLikes.push({
            id: allLikes[i].postId,
            quantity: 1,
          });
        } else {
          console.log("else");
          return (r.quantity += 1);
        }
        /* } */
      });
    }
  }
  console.log("resultcountlikes", resultCountLikes);
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
