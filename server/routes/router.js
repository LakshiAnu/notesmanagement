const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");
const notes = require("../models/noteSchema");

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

router.get("/getUser/:id", async(req,res)=>{
    try {
        const {id} = req.params;
        const userData = await users.findById({_id: id});
        res.status(201).json(userData);
    } catch (error) {
        res.status(422).json(error);
    }
})

router.get("/getUserLogin/:email/:password", async(req,res)=>{
    const {email, password} = req.params;
    if(!email || !password){
        res.status(422).json("Enter username and password");
    }
    try {
        const userData = await users.findOne({email: email, password: password});
        if(!userData){
            res.status(422).json("User not found");
        }else{
            res.status(201).json(userData);
        }
    } catch (error) {
        res.status(422).json(error);
    }
})

router.post("/createNote",async(req,res)=>{
    const status = true;
    const {title, description, user} = req.body;
    if(!title || !description || !user || !status){
        res.status(422).json("Please fill all the data");
    }

    try {        
        const addNote = new notes({
            title, description, user, status
        })
        await addNote.save();
        res.status(201).json(addNote);
    } catch (error) {
        res.status(422).json(error);
    }
})

router.get("/getNotes", async(req,res)=>{
    try {
        const userNotes = await notes.find();
        res.status(201).json(userNotes);
    } catch (error) {
        res.status(422).json(error);
    }
})

module.exports = router