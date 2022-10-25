const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const axios = require("axios");
const { Users, Posts } = require("../db.js");

//GET ALL
router.get("/", async (req, res) => {
  console.log("Hola desde el get");
  res.send("hello world");
});

module.exports = router;
