const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    user:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    },
    role:{
        type:String,
        default:"user",
    },
    apiKey:{
        type:String,
    }

},{timestamps:true});

module.exports=mongoose.model("User",userSchema);