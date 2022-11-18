const { Router } = require("express");
const router = Router();
const axios = require("axios");
const { Dislikes } = require("../db.js");
const { likeSetter } = require("../helpers/likeSetter.js");

router.put("/:commentId", async (req, res, next) => {
  let { commentId } = req.params;
  let { userId, switcher } = req.body;
  try {
    let result = likeSetter(Dislikes, switcher, userId, commentId);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});
