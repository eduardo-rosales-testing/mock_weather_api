const router = require("express").Router();
const validateUserCredential = require("../validation");
const jwt = require("jsonwebtoken");

router.post("/", (req, res) => {
  var user = req.body;
  // validate user's password (valid if password is the reverse of username)
  var isValidUser = validateUserCredential(user);
  if (isValidUser) {
    // create a JWT token
    const token = jwt.sign(user, process.env.TOKEN_SECRET);
    res.header("Authentication", token).status(200).json({ 
      data: token, 
    });
  } else {
    return res.status(401).json({ 
      error: "Access Unauthorized", 
    });
  }
});

module.exports = router;