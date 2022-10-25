const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const users = require("./users");
const posts = require("./posts");

router.use("/users", users);
router.use("/posts", posts);

module.exports = router;
