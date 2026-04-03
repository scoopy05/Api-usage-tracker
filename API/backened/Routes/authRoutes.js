const express = require("express");
const router = express.Router();

const { registerUser, loginUser, verifyEmail } = require("../Controllers/authcontroller");
const loginLimitter = require("../middlewares/loginLimmiter");

router.post("/register", loginLimitter, registerUser);
router.post("/login", loginLimitter, loginUser);


router.get("/verify/:token", verifyEmail);

module.exports = router;