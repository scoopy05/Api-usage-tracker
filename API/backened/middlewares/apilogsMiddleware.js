const apilogs=require("../models/apilogs");

const LogApiUsage=async (req,res,next)=>{
    const start = Date.now(); 
    res.on("finish",async ()=>{
        const latency = Date.now() - start;
        try{
            await apilogs.create({
                apikey:req.user.apikey,
                endpoint:req.originalUrl,
                method:req.method,
                status:res.statusCode,
                latency: latency
                  
            })
            


        }catch(err){
            console.log(err);
        }
        

    })
    next();
   

}

module.exports=LogApiUsage;