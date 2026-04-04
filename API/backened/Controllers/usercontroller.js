const User=require("../models/User");

const getme=async(req,res)=>{
    try{
        const user=await User.findById(req.user.id).select("-password");
        res.json(user);
    }catch(error){
        res.status(500).json({message:"Server error"})
    }
};




// GET API KEY
const getApiKey = async (req, res) => {
    try {
        
        const user = await User.findById(req.user.id).select("apikey");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({
            apikey: user.apikey
        });

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
const { v4: uuidv4 } = require("uuid");

// REGENERATE API KEY
const regenerateApiKey = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.apikey = uuidv4();
        await user.save();

        res.json({
            message: "API key regenerated successfully",
            apikey: user.apikey
        });

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { getme, getApiKey, regenerateApiKey };