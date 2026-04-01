const mongoose=require("mongoose");
const Plan = require("../models/planModel");
const seedPlans = async () => {
    const freePlan = await Plan.findOne({ name: "free" });
    if (!freePlan) {
      await Plan.create({
        name: "free",
        apiLimit: 100,
        price: 0,
        available: true
      });
      console.log("Free plan created");
    }
  
    const proPlan = await Plan.findOne({ name: "pro" });
    if (!proPlan) {
      await Plan.create({
        name: "pro",
        apiLimit: 10000,
        price: 499,
        available: false
      });
      console.log("Pro plan created");
    }
  };

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("database connected");

        await seedPlans();  

    }catch(error){
        console.log(error);
        process.exit(1);
    }
};

module.exports=connectDB;