const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const axios = require("axios");
const { Comments, Likes } = require("../db.js");

router.get("/", async (req, res) => {
  let { id } = req.params;
  try {
    let comment = await Comments.findAll(); //todos todos

    console.log(comment);

    res.status(200).json(comment);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  let { content, author, postId, img } = req.body;
  console.log(req.body.img.length);
  try {
    let comment = await Comments.findOrCreate({ where: {content, author, postId, img} });
    console.log('back', comment)
     res.status(200).json(comment) 
  } catch (err) {
    console.log(err);
  }
});


module.exports = router;

