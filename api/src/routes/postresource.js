const { Router } = require("express");

const router = Router();
const { PostResource } = require("../db.js");


router.get("/", async(req, res) => {
    res.send('desde el back')
})

router.post("/", async(req, res, next) => {
    const {author, content, archivos, util, noUtil }= req.body;
    console.log(PostResource)
    try {
        let createPost = await PostResource.findOrCreate({
            where: {
                author,
                content,
                archivos,
                util,
                noUtil,
            }
        })
        res.status(200).send(createPost)
    } catch (error) {
        next(error)
    }
});

module.exports = router