const jwt = require("jsonwebtoken");
// middleware to validate token
const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  req.user = token;
  if (!token) {
    return res.status(403).json({ error: "Access Forbidden" });
  }

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    return res.status(403).json({ error: "Access Forbidden" });
  }
}

module.exports = verifyToken