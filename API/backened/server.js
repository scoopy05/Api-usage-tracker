const app=require("./app");
require("dotenv").config();
const connectDB=require("./confiq/db");
connectDB();

const PORT=8000 || process.env.PORT;

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
});