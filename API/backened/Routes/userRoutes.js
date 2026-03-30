const express=require("express");

const router=express.Router();

const authMiddleware=require("../middlewares/authMiddlerware");
const {getme}=require("../Controllers/usercontroller");

router.get("/me",authMiddleware,getme);

module.exports=router;