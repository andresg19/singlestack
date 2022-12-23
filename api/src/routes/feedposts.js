const { Router } = require("express");
const { filterLikesFeed } = require("../helpers/filterLikesFeed");
const router = Router();
const { Feedposts } = require("../db.js");
const { Feedlikes } = require("../db.js");

router.get("/", async (req, res) => {
  const { filter } = req.body;

  console.log("body", req.body);
  console.log("filter", filter);

  try {
    let allPosts = await Feedposts.findAll();
    //let allLikes = await Feedlikes.findAll();

    switch (filter) {
      case "date": // los mas viejos
        let dateFilter = await Feedposts.findAll({
          order: [["createdAt", "ASC"]],
        });

        return res.status(200).send(dateFilter);

      case "likes":
        let likesSort = allPosts.sort((a, b) => {
          return b.likes - a.likes;
        });

        return res.status(200).send(likesSort);

      case "comments":
        let commentsSort = allPosts.sort((a, b) => {
          return b.comments - a.comments;
        });

        return res.status(200).send(commentsSort);

      default: // mas nuevos
        let dateDefault = await Feedposts.findAll({
          order: [["createdAt", "DESC"]],
        });

        return res.status(200).send(dateDefault); //
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

//AHI VENGO
