const express=require("express");
const cors=require("cors");
const cookieParser=require("cookie-parser");





const app=express();

app.use(cors({
  origin: [
    "https://api-usage-tracker-ten.vercel.app",
    "https://api-usage-tracker-git-main-scoopy05s-projects.vercel.app",
    "http://localhost:5173",
    "http://127.0.0.1:5500"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "x-api-key"]
}));


app.options("*", cors());

app.use(express.json());
app.use(cookieParser());

app.get("/",(req,res)=>{
res.send(" API managemnt server")});

const authRoutes=require("./Routes/authRoutes");
const userRoutes=require("./Routes/userRoutes");
const apiRoutes=require("./Routes/apiRoutes");
const planRoutes = require("./Routes/planRoutes");
const proxyRoutes =require("./Routes/proxyroutes.js");

app.use("/api/auth",authRoutes);
app.use("/api/user",userRoutes);
app.use("/api",apiRoutes);
app.use("/api", planRoutes);
app.use("/proxy", proxyRoutes);;


module.exports=app;