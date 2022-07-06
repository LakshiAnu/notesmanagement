const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: Boolean,
        required: true
    },
});

const notes = new mongoose.model("notes",noteSchema);

module.exports = notes;