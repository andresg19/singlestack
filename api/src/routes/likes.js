const { Router } = require("express");

const router = Router();
const axios = require("axios");
const { Comments, Likes, Users } = require("../db.js");

router.put("/:commentId", async (req, res) => {
  let { commentId } = req.params;
  try {
    let like = await Likes.findOne({ where: { commentId } });
    console.log("🚀 ~ file: likes.js ~ line 11 ~ router.put ~ like", like);
    if (like) {
      console.log("entra al if");
      let cont = like.like + 1;
      let setLike = await Likes.update(
        {
          likes: like.like + 1,
        },
        {
          where: {
            commentId,
          },
        }
      );
      console.log(
        "🚀 ~ file: likes.js ~ line 25 ~ router.put ~ setLike",
        setLike
      );
    } /* else {
      console.log("entra al else");
      let newLike = Likes.create({ where: { likes: 1, commentId } });
      res.send(newLike);
    } */
    res.send("sale");
  } catch (err) {
    res.send(err);
  }
});
//muestre todos los likes
//muestre todos los dislikes
//put

module.exports = router;
