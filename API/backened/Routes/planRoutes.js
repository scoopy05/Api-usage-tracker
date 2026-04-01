const express = require("express");
const router = express.Router();
const { getPlans } = require("../Controllers/plancontroller");

router.get("/plans", getPlans);

module.exports = router;