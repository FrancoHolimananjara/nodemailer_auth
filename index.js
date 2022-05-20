const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();

//CREATE SERVER (instance)
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(morgan('dev'))
app.get("/",(req,res)=>{
    res.send("Hello World");
})

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST;

//LISTENING SERVER
app.listen(PORT,()=>{
    console.log(`Server running on ${HOST}${PORT}`);
})