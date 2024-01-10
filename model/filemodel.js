const mongoose = require("mongoose");

const FileuploadSchema =  mongoose.Schema({
 
  cloudinaryurl: { type: String, required: true },
  private_code: { type: String, required: true },
  userId:{
    type:String
},
username:{
    type:String
},
shahid:{
    type:String
}
});

const file_upload = mongoose.model("upload_File", FileuploadSchema);

 module.exports = { file_upload }; 