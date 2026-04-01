const apilogs=require("../models/apilogs");

const GetApiUsage= async (req,res)=>{
    try{
        const apikey = req.user.apikey;
        const TotalRequest= await apilogs.countDocuments({apikey});

        const today=new Date();
        today.setHours(0,0,0,0);

        const TodayRequests=await apilogs.countDocuments({
            apikey:apikey,
            timestamp:{$gte:today}
        });
        

        const LastLog=await apilogs.findOne({apikey}).sort({timestamp:-1})

        res.json({
            TotalRequest,TodayRequests,LastUsed:LastLog ? LastLog.timestamp : null
        })



    }catch(err){
        res.status(500).json({message:"Server Error"})
    }
};
const getLogs = async (req, res) => {
    try {
        const logs = await apilogs.find({ apikey: req.user.apikey });
        res.json(logs);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

module.exports={GetApiUsage,getLogs};