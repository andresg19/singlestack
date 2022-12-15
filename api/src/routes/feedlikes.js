const { Router } = require("express");
const router = Router();
const { FeedLikes } = require("../db.js");

router.get("/", async (req, res) => {
  try {
    let likes = await FeedLikes.findAll();
    res.status(200).send(likes);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put("/:postId", async (req, res, next) => {
  let { postId } = req.params;
  let { userId } = req.body;

  try {
    const matchLike = await FeedLikes.findOne({
      where: { postId, userId },
    });

    if (!matchLike) {
      let newMatch = await FeedLikes.create({
        likes: 1,
        postId,
        userId,
      });
      res.status(200).send(newMatch);
    } else {
      let deleteLike = await FeedLikes.destroy({
        where: { postId, userId },
      });
      res.status(200).send("borrado");
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
