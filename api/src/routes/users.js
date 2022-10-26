const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const axios = require("axios");
const { Users, Posts } = require("../db.js");

//GET ALL
router.get("/", async (req, res) => {
  try {
    let users = await Users.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).send(error);
  }
});

//CREATE USER
router.post("/", async (req, res, next) => {
  try {
    const { fullname, email, password } = req.body;

    const newUser = await Users.create({
      fullname,
      email,
      password,
    });

    res.send("User created");
  } catch (error) {
    next(error);
  }
});

//DELETE USER
router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;
  return Users.destroy({
    where: { id },
  })
    .then(() => {
      res.status(200).send("User delete successfully");
    })
    .catch((error) => next(error));
});

module.exports = router;
