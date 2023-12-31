const router = require("express").Router();
const  User  = require("../../models/User");
const { Thought } = require("../../models/Thought");
const { Reaction } = require("../../models/Reaction");

// Get router to get reactions
router.get('/', async(req, res) => {
    try{
        const reactionData = await Reaction.find();
        res.json(reactionData);
    } catch(err){
        console.log(err);
        res.status(401).send({
            message: err.message,
        })
    }
});



module.exports = router;