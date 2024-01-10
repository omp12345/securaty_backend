const multer=require("multer")
const uuid=require("uuid").v4
const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, "uploads");
  },

  filename(req, file, callback) {
   

    const id = uuid();
    const extName = file.originalname.split(".").pop();
     callback(null, `${id}.${extName}`);
  },
 
});
  const singleUpload = multer({ storage }).single("om");
  module.exports={
    singleUpload
  }