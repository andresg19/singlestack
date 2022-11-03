const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const axios = require("axios");
const { Users, Posts, Comments, Comments_Posts } = require("../db.js");

//Checkea si andan las rutas
router.get("/test", async (req, res) => {
  res.status(200).json("Todo en orden");
});

//TRAE TODOS LOS POSTS
router.get("/", async (req, res) => {
  try {
    let posts = await Posts.findAll();
    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json(`Error del catch getall, ${err}`);
  }
});

//CREA UN POST
router.post("/", async (req, res) => {
  let { title, content, author } = req.body;

  try {
    let [posts, created] = await Posts.findOrCreate({
      where: {
        title,
        content,
        author,
      },
    });
    created ? res.status(200).json(posts) : null; // este if es porque me molesta el created sin usar
  } catch (error) {
    res.status(400).json(`Error del catch post, ${error}`);
  }
});

//BORRA UN POST
router.delete("/:id", async (req, res) => {
  let { id } = req.params;

  try {
    let destroyPost = await Posts.destroy({
      where: {
        id,
      },
    });
    res.status(200).send("Borrado con exito");
  } catch (error) {
    res.status(400).json(`Error del catch del delete, ${err}`);
  }
});

//EDITA UN POST
router.get("/", async (req, res) => {
  console.log("Hola desde el get");
});

//BUSCA UN POST
router.get("/:id", async (req, res) => {
  let { id } = req.params;
  try {
    let search = await Posts.findOne({
      where: {
        id,
      },
    });

    let joinner = await Comments_Posts.findOne({
      where: {
        postId: search.id,
      },
    });
    let comments = await Comments.findAll({
      where: {
        id: joinner.commentId,
      },
    });
    let result = [search, comments];
    res.status(200).send(result);
  } catch (err) {
    res.status(400).json(`Error del catch del searchID, ${err}`);
  }
});

module.exports = router;
