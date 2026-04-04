const app=require("./app");
require("dotenv").config();
const connectDB=require("./confiq/db");
connectDB();


const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
});