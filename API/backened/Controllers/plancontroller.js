const Plan = require("../models/planModel");

const getPlans = async (req, res) => {
  try {
    const plans = await Plan.find({ available: true });
    res.json(plans);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getPlans };