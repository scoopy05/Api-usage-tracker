
  const randomJoke = (req, res) => {
    const jokes = [
      "Why do programmers hate nature? Too many bugs.",
      "Why did the developer go broke? Because he used up all his cache.",
      "Debugging is like being a detective in a crime movie where you are also the murderer.",
      "I would love to change the world, but they won’t give me the source code."
    ];
  
    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    res.json({ joke });
  };
  
  const currentTime = (req, res) => {
    res.json({
      time: new Date().toISOString()
    });
  };
  
  const randomPassword = (req, res) => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
  
    for (let i = 0; i < 10; i++) {
      password += chars[Math.floor(Math.random() * chars.length)];
    }
  
    res.json({ password });
  };
  
  const base64Encode = (req, res) => {
    const { text } = req.query;
  
    if (!text) {
      return res.status(400).json({ message: "Text query required" });
    }
  
    const encoded = Buffer.from(text).toString("base64");
    res.json({ encoded });
  };
  
  module.exports = {
    randomJoke,
    currentTime,
    randomPassword,
    base64Encode
  };