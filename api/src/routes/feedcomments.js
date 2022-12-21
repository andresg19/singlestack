const { Router } = require("express");

const router = Router();

const { Feedcomments } = require("../db.js");

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
    let comment = await Feedcomments.create({ author, feedPostId, content });
    res.status(200).json(comment);
  } catch (error) {
    console.log(error);
  }
});

//falta editar y borrar || ponerle likes?

module.exports = router;
