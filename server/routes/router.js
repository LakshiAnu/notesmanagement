const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");

// router.get("/", (req,res)=>{
//     console.log('connect');
// })

router.post("/register",async(req,res)=>{
    const status = true;
    const {firstName, lastName, email, password, mobile, type, dob} = req.body;
    if(!firstName || !lastName || !email || !password || !mobile || !type || !dob || !status){
        res.status(422).json("Please fill all the data");
    }

    try {
        const preuser = await users.findOne({email: email});
        if(preuser){
            res.status(422).json("This user already exists");
        }else{
            const addUser = new users({
                firstName, lastName, email, password, mobile, type, dob, status 
            })
            await addUser.save();
            res.status(201).json(addUser);
        }
    } catch (error) {
        res.status(422).json(error);
    }
})

router.get("/getUsers", async(req,res)=>{
    try {
        const userData = await users.find();
        res.status(201).json(userData);
    } catch (error) {
        res.status(422).json(error);
    }
})

module.exports = router