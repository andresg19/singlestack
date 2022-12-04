const { Router } = require("express");

const router = Router();
const { PostResources } = require("../db.js");


router.get("/", async(req, res) => {
    res.send('desde el back')
})

router.post("/", async(req, res, next) => {
    const {author, content, archivos, util, noUtil }= req.body;
    
    try {
        let createPost = await PostResources.findOrCreate({
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
        res.status(404).json(`Error del catch getall, ${error}`)
    }
});

module.exports = router