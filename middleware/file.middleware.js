const multer=require("multer")
const uuid=require("uuid").v4
const storage = multer.diskStorage({
  destination(req, file, callback) {
    console.log(req)
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