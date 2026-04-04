const express=require("express");
const cors=require("cors");
const cookieParser=require("cookie-parser");





const app=express();

const corsOptions = {
  origin: "*", 
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "x-api-key", "Authorization"]
};


app.use(cors(corsOptions));


app.options("*", cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.get("/",(req,res)=>{
res.send(" API managemnt server")});

const authRoutes=require("./Routes/authRoutes");
const userRoutes=require("./Routes/userRoutes");
const apiRoutes=require("./Routes/apiRoutes");
const planRoutes = require("./Routes/planRoutes");
import proxyRoutes from "./Routes/proxyroutes.js";;

app.use("/api/auth",authRoutes);
app.use("/api/user",userRoutes);
app.use("/api",apiRoutes);
app.use("/api", planRoutes);
app.use("/proxy", proxyRoutes);;


module.exports=app;