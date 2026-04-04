const app=require("./app");
require("dotenv").config();
const connectDB=require("./confiq/db");
connectDB();
app.get("/", (req, res) => {
    res.send("SERVER.JS ROOT WORKING");
  });
  
  app.get("/test", (req, res) => {
    res.send("SERVER.JS TEST WORKING");
  });

const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
});