const { blacklist } = require("../blacklist");

const jwt=require("jsonwebtoken")

require("dotenv").config()

const auth = (req, res, next) => {
  const bolcktoken=req.headers.authorization?.split(" ")[1]
  if(blacklist.includes(bolcktoken)){
      next() 
  }
    try {
      console.log(req.file)
      const token = req.headers.authorization.split(' ')[1];
   
      const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
     console.log(decodedToken)
      req.body.userId = decodedToken.userId ;
      req.body.username=decodedToken.username
      next();
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  };
 
 
  
  module.exports={
   auth
  }
