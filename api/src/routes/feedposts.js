const { Router } = require("express");
const { filterLikesFeed } = require("../helpers/filterLikesFeed");
const router = Router();
const { Feedposts } = require("../db.js");
const { Feedlikes } = require("../db.js");

router.get("/", async (req, res) => {
  const { filter } = req.body;

  try {
    let allPosts = await Feedposts.findAll();
    //let allLikes = await Feedlikes.findAll();

    switch (filter) {
      case "date":
        let dateFilter = await allPosts.reverse();
        return res.status(200).send(dateFilter);

      case "likes":
        let postsLikesSort = allPosts.sort((a, b) => {
          return b.likes - a.likes;
        });
        return res.status(200).send(postsLikesSort);

      default:
        return res.status(200).send(allPosts);
    }
  } catch (error) {
    res.status(400).json(`Error del catch post, ${error}`);
  }
});

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

  try {
    let search = Feedposts.findOne({
      where: {
        id: id,
      },
    });
    res.status(200).send(search);
  } catch (error) {
    res.status(400).json(console.log(error));
  }
});

//filtros feed

module.exports = router;
