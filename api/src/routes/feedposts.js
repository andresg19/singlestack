const { Router } = require("express");
const { filterLikesFeed } = require("../helpers/filterLikesFeed");
const router = Router();
const { Feedposts, Feedcomments } = require("../db.js");
const { Feedlikes } = require("../db.js");

router.get("/", async (req, res) => {
  try {
  let allPosts = await Feedposts.findAll();
  res.status(200).send(allPosts); //
  }
  catch (error) {
  res.status(400).json(console.log(error));
      
  }
  });

router.get("/likes", async (req, res) => {
  try {
    let allPosts = await Feedposts.findAll({
      order: [ ['likes', 'DESC'], ],
    });
    res.status(200).send(allPosts);
  } catch (error) {
    res.status(400).json(console.log(error))
  }
})

router.get("/comments", async (req, res) => {
  try {
    let allPosts = await Feedposts.findAll({
      order: [ ['comments', 'DESC'], ],
    });
    res.status(200).send(allPosts);
  } catch (error) {
    res.status(400).json(console.log(error))
  }
})

router.get("/date", async (req, res) => {
  try {
    let allPosts =  await Feedposts.findAll({
        order: [ ['createdAt', 'DESC'], ],
      });
      res.status(200).send(allPosts);
  } catch (error) {
    res.status(400).json(console.log(error))
  }
})
 
router.post("/", async (req, res) => {
  let { content, author, img } = req.body;
  console.log(req.body);

  try {
    let posts = await Feedposts.create({
      content,
      author,
      img,
    });
    res.status(200).json(posts); // este if es porque me molesta el created sin usar
  } catch (error) {
    res.status(400).json(console.log(error));
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    let result = Feedposts.destroy({
      where: {
        id,
      },
    });
    res.status(200).send("Post eliminado");
  } catch (error) {
    res.status(400).json(console.log(error));
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id)
  console.log('entre')
 
  try {
    let search = await Feedposts.findOne({
      where: {
        id: id,
      },
    });
    let allComments = await Feedcomments.findAll({ where: { feedPostId: id } });
    res.status(200).send([search, allComments]);
  } catch (error) {
    res.status(400).json(console.log(error));
  }
});


//filtros feed

module.exports = router;

//AHI VENGO
