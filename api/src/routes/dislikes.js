const { Router } = require("express");
const router = Router();
const axios = require("axios");
const { Dislikes } = require("../db.js");


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
console.log(commentId)
  let { userId } = req.body;

  try {

    const matchDislikes = await Dislikes.findOne({
        where: {commentId, userId}
      })
  
    if ( !matchDislikes ) {
      let newMatch = await Dislikes.create({
        dislikes: 1,
        commentId,
        userId,
      }) 
      res.status(200).send(newMatch)
  
    } else {
      let deleteDislike = await Dislikes.destroy({
        where: { commentId, userId },
      })
      res.status(200).send('borrado')
    }
    
  } catch (error) {
    res.status(404).send('error del catch dislike', error)
  }
});

module.exports = router;
