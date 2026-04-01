const User = require("../models/User");

const apikeyMiddleware = async (req, res, next) => {
  try {
    const apikey = req.header("x-api-key");

    if (!apikey) {
      return res.status(401).json({ message: "Api key missing" });
    }

    const user = await User.findOne({ apikey }).populate("plan");

    if (!user) {
      return res.status(401).json({ message: "Invalid api key" });
    }

    req.user = user;
    next();

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};

module.exports = apikeyMiddleware;