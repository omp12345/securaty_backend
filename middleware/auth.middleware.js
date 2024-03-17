const { blacklist } = require("../blacklist");

const jwt = require("jsonwebtoken");

require("dotenv").config();

const auth = (req, res, next) => {
  const bolcktoken = req.headers.authorization?.split(" ")[1];
  if (blacklist.includes(bolcktoken)) {
    next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1];

    const decodedToken = jwt.verify(token, "mobigic");

    req.body.userId = decodedToken.userId;
    req.body.username = decodedToken.username;
    next();
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports = {
  auth,
};
