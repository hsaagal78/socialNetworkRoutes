const router = require("express").Router();
const  User  = require("../../models/User");
const { Thought } = require("../../models/Thought");


//Show all the User
router.get('/', async (req, res ) => {
    
    try {
        const users = await User.find().populate([
        
            {
                path: "friends",
                select: "_v",
            },
            {
                path: "thoughts",
                select: "_v",
                populate: {
                    path: "reactions",
                    select: "-__v",
                  },
            },
        ]);
        res.json(users);

    }catch(err) {
        console.log('error');
        res.status(401).send({
            message: err.message,
            
        });
    }

});

//Show user by Id. 
router.get('/:id', async (req, res ) => {
    
    try {
        const users = await User.findOne({_id: req.params.id}).populate([
        
            {
                path: "friends",
                select: "_v",
            },
            {
                path: "thoughts",
                select: "_v",
                populate: {
                    path: "reactions",
                    select: "-__v",
                  },
            },
        ]);
        res.json(users);

    }catch(err) {
        console.log('error');
        res.status(401).send({
            message: err.message,
            
        });
    }

});

// Create a new User
router.post('/', async(req, res) => {

    try{
        const addUser = await User.create(req.body);
        res.json(addUser);

    } catch(err) {
        console.log(err);
        res.status(401).send({
            message: err.message,
        })
    }

});

router.put('/:id', async(req, res) => {

    try{
        const addUser = await User.findOneAndUpdate(
            { _id: req.params.id},
            { $set: req.body },
            { runValidators: true, new: true }
        );
        res.json(addUser);

    } catch(err) {
        console.log(err);
        res.status(401).send({
            message: err.message,
        })
    }

});








module.exports = router;