const router = require("express").Router();
const  User  = require("../../models/User");
const {Thought}  = require("../../models/Thought");


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

module.exports = router;