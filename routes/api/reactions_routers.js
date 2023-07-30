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

// Create a reaction stored in a single thought's reactions array field
router.post('/', async (req, res) => {
    try {
        const { reactionBody, username, thoughtId } = req.body;
        console.log(req.body);
        // Crear una nueva reacción y guardarla en la base de datos
        const newReaction = await Reaction.create({
            reactionBody,
            username
        });
        console.log(newReaction);
        // Actualizar el pensamiento existente para agregar la nueva reacción al arreglo de reacciones
        const updatedThought = await Thought.findByIdAndUpdate(
            thoughtId,
            { $push: { reactions: newReaction._id } },
            { runValidators: true, new: true }
        );

        if (!updatedThought) {
            return res.status(404).json({ message: "Thought not found" });
        }

        res.json(newReaction);
    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: "An error occurred while creating the reaction",
        });
    }
});

//Remove a reaction by the reaction 
router.delete('/:id', async(req, res) => {
    try{
        const deletereaction = await Reaction.findByIdAndDelete({_id:req.params.id});
        res.json(deletereaction);
    } catch(err){
        console.log(err);
        res.status(401).send({
            message: err.message,
        })
    }
});

module.exports = router;