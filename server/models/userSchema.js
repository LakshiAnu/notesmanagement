const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
});

const users = new mongoose.model("users",userSchema);

module.exports = users;