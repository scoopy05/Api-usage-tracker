const User=require("../models/User");
const bcrypt=require(bcryptjs);
const {v4:uuidv4}=require("uuid");

const registerUser=async (req,res)=>{
    try{
        const {name,email,password}=req.body;
        // check if user exits
        const userExits=await Userfindone({email});
        if(userExits){
            res.status(400).json({message:"User already exits"});
        }
        //hash password
         const salt= await bcrypt.genSalt(10);
         const hashPassword=await bcrypt.hash(password,salt);

         //generate apikey
         const apiKey=uuidv4();

        const user= await User.create({
            user:name,email,password:hashPassword,apiKey
        });
        res.status(201).json({
            message:"User created",
            apiKey:user.apiKey,
        });


    }catch(error){
        res.status(500).json({message:"Server error"
        })
    }
};

module.exports={registerUser};