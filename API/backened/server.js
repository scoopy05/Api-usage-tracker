const express = require("express");
const app = express();





require("dotenv").config();
const connectDB=require("./confiq/db");
connectDB();
require("./app")(app);


const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
});