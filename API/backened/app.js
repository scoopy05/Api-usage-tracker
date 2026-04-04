const express=require("express");
const cors=require("cors");
const cookieParser=require("cookie-parser");
console.log("APP.JS LOADED");





const app=express();
app.use((req, res, next) => {
  console.log("Request received:", req.method, req.url);
  next();
});

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




app.use(express.json());
app.use(cookieParser());

app.get("/",(req,res)=>{
res.send(" API managemnt server")});
app.get("/test", (req, res) => {
  res.send("Test route working");
});

const authRoutes=require("./Routes/authRoutes");
const userRoutes=require("./Routes/userRoutes");
const apiRoutes=require("./Routes/apiRoutes");
const planRoutes = require("./Routes/planRoutes");


app.use("/api/auth",authRoutes);
app.use("/api/user",userRoutes);
app.use("/api",apiRoutes);
app.use("/api", planRoutes);

console.log("ROUTES LOADED");


module.exports=app;