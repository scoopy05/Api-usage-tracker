const express=require("express");
const router=express.Router();

const{registerUser,loginUser}=require("../Controllers/authcontroller")
const loginLimitter=require("../middlewares/loginLimmiter");

router.post("/register",loginLimitter,registerUser);
router.post("/login",loginLimitter,loginUser);

module.exports=router;