const router = require("express").Router();
const  User  = require("../../models/User");
const {Thought}  = require("../../models/Thought");
const { Reaction }  = require("../../models/Reaction");



//Show all thought
router.get('/', async(req, res) =>{
    try{
        const allThought = await Thought.find().populate({
            path: "reactions",
            select: "-__v",
          })

        res.json(allThought);
    }catch(err) {
        console.log(err);
        res.status(401).send({
            message: err.message,
        })

    }
});

//Show thoughts by id
router.get('/:id', async(req, res) =>{
    try{
        const userThought = await Thought.findOne({_id: req.params.id}).populate({
            path: "reactions",
            select: "-__v",
          })

        res.json(userThought);
    }catch(err) {
        console.log(err);
        res.status(401).send({
            message: err.message,
        })

    }
});



// Create thoughts routers
router.post('/', async(req, res) =>{

try{
    const addedThought = await Thought.create(req.body);
    

    const userThought = await User.findOne({username: addedThought.username });
    const insertThought = await User.findByIdAndUpdate(
        {_id: userThought._id },
        { $push: { thoughts: addedThought}},
        { runValidators: true, new: true }
    );
        res.json({insertThought})
} catch {

        console.log(err);
        res.status(401).send({
            message: err.message,
        })
    }
});

//update thought by id
router.put('/:id', async(req, res) => {

    try {
    const update = await Thought.findByIdAndUpdate(
        {_id: req.params.id},
        {$set:  { thoughtText: req.body.thoughtText }},
        { runValidators: true, new: true }

     );
        res.json(update);
    } catch(err){
        console.log(err);
        res.status(401).send({
            message: err.message,
        })
    

    }
});

//Delete thought by id
router.delete('/:id', async(req, res) => {

    try {
        const deletedThought = await Thought.findOneAndDelete({ _id: req.params.id });
        res.json({message: 'Thought deleted succesfully!'});
    } catch(err){
        console.log(err);
        res.status(401).send({
            message: err.message,
        })
    

    }
});

//Create a reaction stored in a single thought's reactions array field
router.post('/:id/reactions', async(req, res) => {
    try{
        const existingThought = await Thought.findById(req.params.id);
        

        const newReaction = await Reaction.create({
            reactionBody: req.body.reactionBody,
            username: req.body.username,
          });


         await existingThought.updateOne({ $push: { reactions: newReaction._id } });

    res.json(newReaction);
    } catch(err){
        console.log(err);
        res.status(401).send({
            message: err.message,
        })
    }
});

//delete a reaction stored in a single thought's reactions array field
router.delete('/:id/reactions/:reactionId', async(req, res) => {
    try{
    
        const existingThought = await Thought.findById(req.params.thoughtId);

        const deleteReaction = await Reaction.findById(req.params.reactionId);
          
        await deleteReaction.deleteOne();

        //  await existingThought.updateOne({ $pull: {reactions:req.params.reactionId} });

    res.json({message: " Deleted reaction succesfuly!"});
    } catch(err){
        console.log(err);
        res.status(401).send({
            message: err.message,
        })
    }
});

module.exports = router;