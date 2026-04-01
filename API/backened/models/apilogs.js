const mongoose=require("mongoose");

const apiSchema=new mongoose.Schema({
    apikey:String,
    endpoint:String,
    method:String,
    status:Number,
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports=mongoose.model("apilogs",apiSchema);