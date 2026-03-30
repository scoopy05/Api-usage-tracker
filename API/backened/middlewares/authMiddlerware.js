const jwt=require("jsonwebtoken");

const authMiddleware=async(req,res,next)=>{
    try{
        const authHeader=req.header.authorization;
        if(!authHeader){
            return res.status(401).json({message:"Invalid header"});
        }
        const token=authHeader.split(" ")[1];
        const decoded=  jwt.verify(token,"secretkey");

        req.user=decoded;
        next();

    }catch(error){
        res.status(401).jspn({message:" Invalid token"});
    }
}
module.exports=authMiddleware;