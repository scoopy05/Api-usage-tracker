const apilogs=require("../models/apilogs");

const LogApiUsage=async (req,res,next)=>{
    res.on("finish",async ()=>{
        try{
            await apilogs.create({
                apikey:req.user.apikey,
                endpoint:req.originalUrl,
                method:req.method,
                status:res.statusCode,
            })
            


        }catch(err){
            console.log(err);
        }
        

    })
    next();
   

}

module.exports=LogApiUsage;