const express=require("express");

const router=express.Router();

const authMiddleware=require("../middlewares/authMiddlerware");
const {getme, getApiKey, regenerateApiKey} = require("../Controllers/usercontroller");
const {GetApiUsage,getLogs}=require("../Controllers/dashboardcontroller")

router.get("/me",authMiddleware,getme);
router.get("/usage",authMiddleware,GetApiUsage);
router.get("/logs",authMiddleware,getLogs);
router.get("/apikey",authMiddleware,getApiKey);
router.post("/apikey/regenerate",authMiddleware,regenerateApiKey);

module.exports=router;