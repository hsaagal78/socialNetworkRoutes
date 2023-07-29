const router = require("express").Router();
const  User  = require("../../models/User");
const { Thought } = require("../../models/Thought");



// Create thoughts routers

router.post('/', async(req, res) =>{

try{
    const addedThought = await Thought.create(req.body);

//created thought's _id to the associated user's thoughts array field
    const userThought = await User.findOne({username: addedThought.username });
    const insertThought = await User.findByIdAndUpdate(
        {_id: userThought._id },
        { $set: { thoughts: [ ...userThought.thoughts, addedThought._id ]}},
        { runValidators: true, new: true }
    );
        res.json({ addedThought, insertThought})
} catch {

        console.log(err);
        res.status(401).send({
            message: err.message,
        })
    
    }


})


module.exports = router;