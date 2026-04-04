const User=require("../models/User");
const bcrypt=require("bcryptjs");
const {v4:uuidv4}=require("uuid");
const jwt=require("jsonwebtoken");
const Plan = require("../models/planModel");
const crypto = require("crypto");
const sendEmail = require("../Utils/sendemail");

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const verificationToken = crypto.randomBytes(32).toString("hex");

        // check if user exists
        const userExits = await User.findOne({ email });
        if (userExits) {
            return res.status(400).json({ message: "User already exists" });
        }

        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        // generate api key
        const apiKey = uuidv4();
        const freePlan = await Plan.findOne({ name: "free" });

       
        const user = await User.create({
            user: name,
            email: email,
            password: hashPassword,
            apikey: apiKey,
            plan: freePlan._id,
            verificationToken: verificationToken,
            isVerified: false
        });

        const verifyLink = `https://api-usage-tracker.onrender.com/api/auth/verify/${verificationToken}`;
        console.log("Sending email to:", email);

        await sendEmail(
            email,
            "Verify your email",
            `<h2>Email Verification</h2>
             <p>Click the link below to verify your email:</p>
             <a href="${verifyLink}">Verify Email</a>`
        );

       
        res.status(201).json({
            message: "User registered. Please verify your email."
        });

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

const loginUser=async (req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await User.findOne({email});
       
        if(!user){
            return res.status(400).json({message:"Invalid credentials"});

        }
        if (!user.isVerified) {
            return res.status(401).json({
                message: "Please verify your email first"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid credentials"});
            
        }
        const token=jwt.sign({
            id:user._id,apikey:user.apikey},
        process.env.JWT_SECRET,{
            expiresIn:"1d"
        })

        res.json({
            message:"login successful",token:token,apikey: user.apikey
        })
    }catch(error){
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

const verifyEmail = async (req, res) => {
    try {
        const user = await User.findOne({
            verificationToken: req.params.token
        });

        if (!user) {
            return res.status(400).send("Invalid or expired token");
        }

        user.isVerified = true;
        user.verificationToken = null;

        await user.save();

        res.send("Email verified successfully. You can now login.");
    } catch (error) {
        res.status(500).send("Server error");
    }
};

module.exports={registerUser,loginUser,verifyEmail};