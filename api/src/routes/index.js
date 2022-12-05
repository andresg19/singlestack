const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const users = require("./users");
const posts = require("./posts");
const comments = require("./comments");
const likes = require("./likes");
const dislikes = require("./dislikes");
const feedposts = require("./feedposts");
const feedcomments = require("./feedcomments");

router.use("/users", users);
router.use("/posts", posts);
router.use("/comments", comments);
router.use("/likes", likes);
router.use("/dislikes", dislikes);
router.use("/feedposts", feedposts);
router.use("/feedcomments", feedcomments);


module.exports = router;
