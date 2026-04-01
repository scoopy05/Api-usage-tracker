const express =require("express");
const router=express.Router();

const apikeyMiddleware=require("../middlewares/apikeyMiddleware");
const apiLimitter=require("../middlewares/apiLimitter");
const apilogsMiddleware=require("../middlewares/apilogsMiddleware");
const dailyLimitMiddleware=require("../middlewares/dailylimitMiddleware")
const {
    randomJoke,
    currentTime,
    randomPassword,
    base64Encode
  } = require("../Controllers/apicontroller");

router.get("/random-jokes",apiLimitter,apikeyMiddleware,dailyLimitMiddleware,apilogsMiddleware,randomJoke)

router.get("/time",apiLimitter,apikeyMiddleware,dailyLimitMiddleware,apilogsMiddleware,currentTime)

router.get("/random-passwords",apiLimitter,apikeyMiddleware,dailyLimitMiddleware,apilogsMiddleware,randomPassword)

router.get("/base64-encode",apiLimitter,apikeyMiddleware,dailyLimitMiddleware,apilogsMiddleware,base64Encode)
module.exports=router;