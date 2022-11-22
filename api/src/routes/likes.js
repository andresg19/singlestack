const { Router } = require("express");
const router = Router();
const { Likes } = require("../db.js");

router.get("/", async (req, res, next) => {
  try {
    let result = await Likes.findAll({});
    res.status(200).send(result);
  } catch (error) {
    res.status(400).json(`error en el catch del get del back, ${error}`);
  }
});

router.put("/:commentId", async (req, res, next) => {
  let { commentId } = req.params;

  let { userId } = req.body;

  const matchLike = await Likes.findOne({
      where: {commentId, userId}
    })

  if ( !matchLike ) {
    let newMatch = await Likes.create({
      likes: 1,
      commentId,
      userId,
    }) 
    res.status(200).send(newMatch)

  } else {
    let deleteLike = await Likes.destroy({
      where: { commentId, userId },
    })
    res.status(200).send('borrado')
  }
 
})  
     
  
  module.exports = router

/* 
  //  if (like.length) {
  //   let addOneLike = Likes.increment('likes', { by: 1, where: { commentId }});
  //   return res.send(addOneLike);
  // } else {
    
  // }
  const likeSetter = async (Model, switcher, userId) => {
  try {
    let like = await Model.FindOne({ where: commentId });

    switch (switcher) {
      case "up":
        //like del like
        break;

      case "down":
        //dislike del like
        break;

      default:
        //crea
        break;
    }
  } catch (error) {
    console.log(error);
  }
};
  */

// console.log(commentId);
// try {

//   } else {
//     let newLike = await Likes.create({ likes: 1, commentId, userId, });
//     res.send(newLike);
//   }
// } catch (err) {
//   res.send(err);
// }

// res.send(like)

// console.log("🚀 ~ file: likes.js ~ line 11 ~ router.put ~ like", like);
// if (like) {
//   console.log("entra al if");
//   let cont = like.like + 1;
//   let setLike = await Likes.update(
//     {
//       likes: like.like + 1,
//     },
//     {
//       where: {
//         commentId,
//       },
//     }
//   );
//   console.log(
//     "🚀 ~ file: likes.js ~ line 25 ~ router.put ~ setLike",
//     setLike
//   );
// }  else {
//   console.log("entra al else");
//   let newLike = Likes.create({ where: { likes: 1, commentId } });
//   res.send(newLike);
// }
// res.send("sale");
//muestre todos los likes
//muestre todos los dislikes
//put


