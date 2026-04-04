const express=require("express");
const cors=require("cors");
const cookieParser=require("cookie-parser");
console.log("APP.JS LOADED");






module.exports = (app) => {
  app.set("trust proxy", 1);

  app.use(cors());
  app.use(express.json());
  app.use(cookieParser());

  app.get("/", (req, res) => {
    res.send("API management server");
  });

  app.get("/test", (req, res) => {
    res.send("Test route working");
  });

  const authRoutes = require("./Routes/authRoutes");
  const userRoutes = require("./Routes/userRoutes");
  const apiRoutes = require("./Routes/apiRoutes");
  const planRoutes = require("./Routes/planRoutes");
  

  app.use("/api/auth", authRoutes);
  app.use("/api/user", userRoutes);
  app.use("/api", apiRoutes);
  app.use("/api", planRoutes);


};