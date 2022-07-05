const mongoose = require('mongoose');
const DB = `mongodb+srv://admin:notesmanagement@cluster0.avjqu.mongodb.net/notes?retryWrites=true&w=majority`;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>console.log("connection started")).catch((error)=>console.log(error.message));