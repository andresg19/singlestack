const { Router } = require("express");

const router = Router();

const { Feedcomments, Feedposts } = require("../db.js");

router.get("/", async (req, res) => {
  try {
    let comments = await Feedcomments.findAll();
    res.status(200).json(comments);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  let { author, feedPostId, content } = req.body;
  try {
    let comment = await Feedcomments.findOrCreate({
      where: {
        author,
        content,
        feedPostId,
      },
    });
    let newCommentInPost = await Feedposts.increment("comments", {
      by: 1,
      where: { id: feedPostId },
    });
    res.status(200).json(comment);
  } catch (error) {
    console.log(error);
  }
});

//falta editar y borrar || ponerle likes?

module.exports = router;
