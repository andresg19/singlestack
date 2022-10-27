const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const axios = require("axios");
const { encrypt, compare } = require('../helpers/handleBcrypt')
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
    
    const passHash = await encrypt(password);
    const newUser = await Users.create({
      fullname,
      email,
      password : passHash
    });

    res.send("User created");
  } catch (error) {
    next(error);
  }
});

//LOGIN
router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({email});
 
    const passCheck = await compare(password, user.password);
    
    if(passCheck) {
      res.send({
        data: user
      })
      return
    }
    if(!passCheck) {
      res.status(409)
      res.send({
        error: 'Invalid password'
      })
      return
    }
    
  } catch (error) {
    next(error);
  }
})

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
