const mongoose = require("mongoose");
const Plan=require("../models/planModel");

const userSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "user",
    },
    apikey: {
        type: String,
    },
    plan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Plan"
      }

}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);