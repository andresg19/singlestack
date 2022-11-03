const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const axios = require("axios");
const { Users, Posts, Comments, Posts_Comments } = require("../db.js");

router.get("/", async (req, res) => {
  let { id } = req.params;
  try {
    let comment = await Comments.findAll(); //todos todos

    console.log(comment);
    /*   ({
    include: {
      model: Posts,
      attributes: ["id"],
      through: {
        attributes: [],
      },
    },
  }); */

    res.status(200).json(comment);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  let { content, author, postId } = req.body;
  try {
    let [comment, created] = await Comments.findOrCreate({
      where: {
        content,
        author,
      },
    });
    console.log("comment", comment);

    /* let tabla = await Posts_Comments.findOrCreate({
      where: {
        commentId: comment.id,
        postId,
      },
    }); */

    let post = await Posts.findOne({ where: { id: postId } });

    //post  comment
    await post.addComments(comment);

    res.status(200).json(post);
  } catch (err) {
    console.log(err);
  }
});

/* 
include: {
      model: Tags,
      attributes: ["nombre"],
      through: {
        attributes: [],
      },
    },
*/

module.exports = router;
