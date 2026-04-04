const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const Plan = require("../models/planModel");

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

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
            // Set to true automatically so your DB schema doesn't throw errors
            isVerified: true 
        });

        res.status(201).json({
            message: "User registered successfully."
        });

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
       
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({
            id: user._id, apikey: user.apikey },
        process.env.JWT_SECRET, {
            expiresIn: "1d"
        });

        res.json({
            message: "login successful", 
            token: token, 
            apikey: user.apikey
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

module.exports = { registerUser, loginUser };