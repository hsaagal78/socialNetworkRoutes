const router = require("express").Router();
const  User  = require("../../models/User");
const { Thought } = require("../../models/Thought");

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








module.exports = router;