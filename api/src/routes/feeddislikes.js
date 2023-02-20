const { Router } = require("express");
const router = Router();
const { Feeddislikes, Feedposts } = require("../db.js");

router.get("/", async (req, res) => {
  try {
    let dislikes = await Feeddislikes.findAll();
    res.status(200).send(dislikes);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put("/:postId", async (req, res, next) => {
  let { postId } = req.params;
  let { userId } = req.body;

  try {
    const matchLike = await Feeddislikes.findOne({
      where: { postId, userId },
    });

    if (!matchLike) {
      let newMatch = await Feeddislikes.create({
        likes: 1,
        postId,
        userId,
      });

      let newLikeInPost = await Feedposts.increment("dislikes", {
        by: 1,
        where: { id: postId },
      });

      res.status(200).send(newMatch);
    } else {
      let deleteLike = await Feeddislikes.destroy({
        where: { postId, userId },
      });

      let newDislikeInPost = await Feedposts.decrement("dislikes", {
        by: 1,
        where: { id: postId },
      });

      res.status(200).send("borrado");
    }
  } catch (error) {
    console.log(error);
  }
});


module.exports = router;
