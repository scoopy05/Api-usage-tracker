
const express =require('express')


const router = express.Router();

// 1️⃣ Random Joke Proxy
router.get("/random-jokes", async (req, res) => {
  try {
    const apikey = req.query.apikey;
    if (!apikey) return res.status(400).json({ error: "API key required" });

    const response = await fetch("https://api-usage-tracker-ten.onrender.com/api/random-jokes", {
      headers: { "x-api-key": apikey }
    });
    const data = await response.json();

    res.set("Access-Control-Allow-Origin", "*");
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Proxy error" });
  }
});

// 2️⃣ Current Time Proxy
router.get("/time", async (req, res) => {
  try {
    const apikey = req.query.apikey;
    if (!apikey) return res.status(400).json({ error: "API key required" });

    const response = await fetch("https://api-usage-tracker-ten.onrender.com/api/time", {
      headers: { "x-api-key": apikey }
    });
    const data = await response.json();

    res.set("Access-Control-Allow-Origin", "*");
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Proxy error" });
  }
});

// 3️⃣ Random Password Proxy
router.get("/random-passwords", async (req, res) => {
  try {
    const apikey = req.query.apikey;
    if (!apikey) return res.status(400).json({ error: "API key required" });

    const response = await fetch("https://api-usage-tracker-ten.onrender.com/api/random-passwords", {
      headers: { "x-api-key": apikey }
    });
    const data = await response.json();

    res.set("Access-Control-Allow-Origin", "*");
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Proxy error" });
  }
});

// 4️⃣ Base64 Encode Proxy
router.get("/base64-encode", async (req, res) => {
  try {
    const apikey = req.query.apikey;
    const text = req.query.text;
    if (!apikey) return res.status(400).json({ error: "API key required" });
    if (!text) return res.status(400).json({ error: "Text query param required" });

    const response = await fetch(`https://api-usage-tracker-ten.onrender.com/api/base64-encode?text=${encodeURIComponent(text)}`, {
      headers: { "x-api-key": apikey }
    });
    const data = await response.json();

    res.set("Access-Control-Allow-Origin", "*");
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Proxy error" });
  }
});

module.exports=router; 