const { Router } = require('express')
const router = Router()
const { userSignupSchema, userSigninSchema, userUpdateSchema } = require('../type.js')
const { User, Accounts } = require('../db.js')
const { userAuth } = require('../middleware/user.js')
const { JWT_SECRET } = require('../config.js')
const jwt = require('jsonwebtoken')

router.post("/signup", async(req, res) => {
    const { username, firstname, lastname, password } = req.body;
    const result = userSignupSchema.safeParse({username, firstname, lastname, password})
    if(result.success) {
        try {
            const user = await User.findOne({username})
            if (user) {
                res.status(401).json({
                    message : "User already exists"
                })
            }else {
                try {
                    const respond = await User.create({username, firstname, lastname, password})
                    // 
                    console.log(respond)
                    try {
                        const acc = await Accounts.create({
                            userId : respond._id,
                            balance : Math.floor(Math.random() * 10000) + 1
                        })
                        console.log(acc);
                        try {
                            const token = jwt.sign({
                                userId : respond._id
                            }, JWT_SECRET)
                            res.status(200).json({
                                userId : respond._id,
                                token
                            })
                            
                        } catch (error) {
                            res.status(404).json({
                                message : "User not found",
                                info : error.message
                            })
                        }
                    } catch (error) {
                        res.status(404).json({
                            message : "Account init failed"
                        })
                    }
                    
                } catch (error) {
                    res.status(401).json({
                        message : "User creation failed",
                        info : error.message
                    })
                }
            }
        } catch (error) {
            res.status(401).json({
                message : "find user failed",
                info : error.message
            })
        }

    }else {
        res.status(401).json({
            message : "Invalid inputs"
        })
    }
})

router.post("/signin", async(req, res, next) => {
    const { username, password } = req.body;
    const result = userSigninSchema.safeParse({username, password});
    if(result.success) {
        try {
            const user = await User.findOne({username, password})
            
            try {
                const token = jwt.sign({
                    userId : user._id
                }, JWT_SECRET)
                res.status(200).json({
                    token
                })
                
            } catch (error) {
                res.status(404).json({
                    message : "User not found",
                    info : error.message
                })
            }
        } catch (error) {
            res.status(404).json({
                message : "User not found"
            })
        }
        
    }else{
        res.status(401).json({
            message : "Invaid input"
        })
    }
})

router.put("/update",userAuth, async(req, res) => {
    const {firstname, lastname, password } = req.body;
    const result = userUpdateSchema.safeParse({firstname, lastname, password})
    if(result.success) {
        try {
            const user = await User.updateOne({username: req.username}, {
                firstname, 
                lastname, 
                password
            })
            res.json({
                message : "User profile updated"
            })
            
        } catch (error) {
            res.status(404).json({
                message : "User not found"
            })
        }
    }else {
        res.status(401).json({
            message : "Invalid input"
        })
    }   
})

router.get("/bulk",userAuth, async(req, res) => {
    const filter = req.query.filter || "";
    try {
        const users = await User.find({
            $or : [
               { 'firstname' :{
                    "$regex": filter
            } },
               { 'lastname' :{
                    "$regex": filter
            } }
            ]

            /**
                $or: [
                    { 'firstname': new RegExp(filter, 'i') }, // 'i' for case-insensitive matching
                    { 'lastname': new RegExp(filter, 'i') }
                ]
             */
        })
        const result = users.map((user) => (
            {
                _id : user._id,  
                firstname :user.firstname,
                lastname : user.lastname,
            }
        ))
        res.status(200).json({
            users : result
        })
    } catch (error) {
        res.status(404).json({
            message : "Users not found"
        })
    }
})

router.post("/me", userAuth, async(req, res) => {
    const userId = req.userId;
    try {
        const user = await User.findOne({_id : userId});
        try {
            const acc = await Accounts.findOne({userId})
            res.status(200).json({
                user :{
                    username : user.username,
                    firstName : user.firstname,
                    lastName : user.lastname
                },
                balance : acc.balance
            })
        } catch (error) {
            res.status(404).json({
                message : "balance fetchin failed",
                info : error.message
            })
        }
        
    } catch (error) {
        res.status(404).json({
            message : "user not found",
            info : error.message
        })
    }

})

module.exports = router;