const User = require("../models/User");
const ApiLog = require("../models/apilogs");

const dailyLimitMiddleware = async (req, res, next) => {
  try {
    const apikey = req.headers["x-api-key"];

    if (!apikey) {
      return res.status(401).json({ message: "API key missing" });
    }

    const user = await User.findOne({ apikey }).populate("plan");

    if (!user) {
      return res.status(403).json({ message: "Invalid API key" });
    }

    const limit = user.plan.apiLimit;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const todayRequests = await ApiLog.countDocuments({
      apikey: apikey,
      timestamp: { $gte: today }
    });
    res.set("X-RateLimit-Limit", limit);
    res.set("X-RateLimit-Remaining", Math.max(limit - todayRequests, 0));

    if (todayRequests >= limit) {
      return res.status(429).json({
        message: "Daily API limit exceeded"
      });
    }

    next();

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = dailyLimitMiddleware;