require("dotenv").config();
const express = require('express');
const app = express();

require("./db/conn");


const port = 8003;

app.listen(port,()=>{
    console.log('Server started')
});