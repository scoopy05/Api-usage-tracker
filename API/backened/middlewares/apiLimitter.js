const rateLimit=require("express-rate-limit");

const apiLimitter=rateLimit({
    windowMs:60*1000,
    max:5,
    message:"Too many request,please try again later"
});

module.exports=apiLimitter;