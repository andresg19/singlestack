const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const axios = require("axios");
const { Comments } = require("../db.js");

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
  let { content, author, postId, img } = req.body;
  console.log(req.body.img.length);
  try {
    let comment = await Comments.create({ content, author, postId, img });
    res.status(200).json(comment);
  } catch (err) {
    console.log(err);
  }
});

router.put("/:id", async (req, res, next) => {
  let { id } = req.params;
  let param = req.body;
  
  try {
    if(param === true){
    
  } else if(param === false) {

  } 
}

  catch (error) {
    next(error)
  }
});

module.exports = router;

/* comments                     posts
    -id                            -id
    -content                       -content
    -author                        -author
    -postId
se postea un post con content y author ----> (post tiene un id unico) <----
agrego un comentario al post realizado ----> (detecto el id del post y se lo guardo al comentario) <----
 */
