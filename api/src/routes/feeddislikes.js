const { Router } = require("express");
const router = Router();
const { Feeddislikes } = require("../db.js");

router.get("/", async (req, res) => {
  try {
    let dislikes = await Feeddislikes.findAll();
    res.status(200).send(likes);
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
      res.status(200).send(newMatch);
    } else {
      let deleteLike = await Feeddislikes.destroy({
        where: { postId, userId },
      });
      res.status(200).send("borrado");
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
