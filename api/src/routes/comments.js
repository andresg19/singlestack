const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const axios = require("axios");
const { Users, Posts, Comments } = require("../db.js");

router.get("/:id", async (req, res) => {
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
  let { content, author } = req.body;
  try {
    let [comment, created] = await Comments.findOrCreate({
      where: {
        content,
        author,
      },
    });

    res.status(200).json(comment);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
