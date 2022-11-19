const { Router } = require("express");
const router = Router();
const axios = require("axios");
const { Dislikes } = require("../db.js");
const { likeSetter } = require("../helpers/likeSetter.js");

router.get("/", async (req, res) => {
  try {
    let result = await Dislikes.findAll({});
    res.status(200).send(result);
  } catch (error) {
    res.status(400).json(`error en el catch del get del back, ${error}`);
  }
});

router.put("/:commentId", async (req, res, next) => {
  let { commentId } = req.params;

  let { userId, switcher } = req.body;

  try {
    let result = likeSetter(Dislikes, switcher, userId, commentId);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(`error en el put comment like up: ${error}`);
  }
});

module.exports = router;
